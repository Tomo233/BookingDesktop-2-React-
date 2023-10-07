import Header from "./components/Header";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Line from "./components/Line";
import Aside from "./components/Aside";
import SearchApartment from "./components/SearchApartment";
import FilterContent from "./components/FilterContent";
import PriceFilter from "./components/PriceFilter";
import Main from "./components/Main";
import Boxes from "./components/Boxes";
import vila from "./assets/vila.png";
import hotel from "./assets/hotel-1.png";
import hotel2 from "./assets/hotel-2.png";
import MainContent from "./components/MainContent";
import SearchResults from "./components/SearchResults";
import { useReducer } from "react";

const initialState = {
  boxes: [
    {
      heading: "Vila Marko Cvetinovic",
      views: 1319,
      location: "Budva,Crna Gora",
      rating: "⭐⭐⭐",
      rooms: 10,
      apartment: 3,
      duplex: 1,
      price: "150",
      image: vila,
      id: 1,
    },
    {
      heading: "Hotel Filip Djurkovic",
      views: 14229,
      location: "Split, Hrvatska",
      rating: "⭐⭐⭐⭐⭐",
      rooms: 30,
      apartment: 10,
      duplex: 5,
      price: "280",
      image: hotel,
      id: 2,
    },
    {
      heading: "Hotel Tomo Bratic",
      views: 479,
      location: "Split, Hrvatska",
      rating: "⭐⭐⭐⭐",
      rooms: 5,
      apartment: 2,
      duplex: 0,
      price: "500",
      image: hotel2,
      id: 3,
    },
  ],
  filteredBoxes: [],
};

function reducer(state, action) {
  // action.type : 150, 150-300, 300-800 ,800
  console.log(action.payload);

  switch (action.type) {
    case "150":
      return {
        ...state,
        filteredBoxes: [...state.filteredBoxes, ...action.payload],
      };

    case "150-300":
      return {
        ...state,
        filteredBoxes: [...state.filteredBoxes, ...action.payload],
      };
    case "300-800":
      return {
        ...state,
        filteredBoxes: [...state.filteredBoxes, ...action.payload],
      };

    case "800":
      return {
        ...state,
        filteredBoxes: [...state.filteredBoxes, ...action.payload],
      };

    case "unChecked":
      return {
        ...state,
        filteredBoxes: state.filteredBoxes.filter(
          (filteredBox) => !action.payload.includes(filteredBox)
        ),
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [{ boxes, filteredBoxes }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="app overflow-x-scroll">
      <Header>
        <Logo />
        <Navigation />
        <Profile />
        <Line />
      </Header>
      <MainContent>
        <Aside>
          <SearchApartment />
          <FilterContent />
          <PriceFilter dispatch={dispatch} boxes={boxes} />
        </Aside>
        <Main>
          <SearchResults />
          {filteredBoxes.length ? (
            // <Boxes boxes={filteredBoxes} />
            <Boxes boxes={new Set(filteredBoxes)} />
          ) : (
            <Boxes boxes={boxes} />
          )}
        </Main>
      </MainContent>
    </div>
  );
}
