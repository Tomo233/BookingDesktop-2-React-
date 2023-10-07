import Filter from "./Filter";

function FilterAside() {
  return (
    <div className="grid place-content-center pt-3.5 h-56">
      <p className="my-2 text-xl font-medium">Filteri</p>
      <Filter text={"Sa bazenom"} />
      <Filter text={"Spa centar"} />
      <Filter text={"Terasa"} />
      <Filter text={"Terasa2"} />
      <Filter text={"Klima"} />
    </div>
  );
}

export default FilterAside;
