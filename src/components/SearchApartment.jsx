import search from "../assets/search.png";
import location from "../assets/location.png";
import home from "../assets/home.png";
import star from "../assets/star.png";
import SearchBox from "./SearchBox";

function SearchApartman() {
  return (
    <div className="h-96 bg-[#F8F8F8] pt-7">
      <p className="text-center ml-8 my-5 text-xl font-semibold	">
        Tvoja Pretraga
      </p>
      <div className="flex justify-center ml-36">
        <form action="#">
          <SearchBox img={location} placeholder="Budva, Crna Gora" />
          <SearchBox img={home} placeholder="Aparman" />
          <SearchBox img={star} placeholder="5 zvedica" />

          <button className="bg-[#3871C8] w-64 h-10 rounded-2xl relative">
            <img className="absolute w-6 h-6 left-3.5" src={search} alt="" />
            <span className="text-[#fff] text-base font-semibold">
              Pretrazite Destinaciju
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchApartman;
