/* eslint-disable react/prop-types */
import Filter from "./Filter";

function PriceFilter({ dispatch, boxes }) {
  function setData(price) {
    return boxes.filter((box) => +box.price <= price);
  }

  function fromToPrice(price, secondPrice) {
    return boxes.filter(
      (box) => +box.price > price && +box.price < secondPrice
    );
  }

  return (
    <div className="grid place-content-center pt-3.5 h-56 ml-7">
      <p className="my-2 text-xl font-medium">Odredi cene</p>
      <Filter
        text={"Do 150$"}
        dispatch={dispatch}
        actionToDispatch={{ type: "150", payload: setData(150) }}
        unChecked={setData(150)}
      />
      <Filter
        text={"Od 150$ do 300$"}
        dispatch={dispatch}
        actionToDispatch={{ type: "150-300", payload: fromToPrice(150, 300) }}
        unChecked={fromToPrice(150, 300)}
      />
      <Filter
        text={"Od 300$ do 800$"}
        dispatch={dispatch}
        actionToDispatch={{ type: "300-800", payload: fromToPrice(300, 800) }}
        unChecked={fromToPrice(300, 800)}
      />
      <Filter
        text={"Od 800$ i vise"}
        dispatch={dispatch}
        actionToDispatch={{ type: "800", payload: setData(800) }}
        unChecked={setData(800)}
      />
    </div>
  );
}

export default PriceFilter;
