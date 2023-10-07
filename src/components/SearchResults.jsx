import DropComponent from "./DropComponent";
function SearchResults() {
  return (
    <div className="flex justify-between gap-5  mt-8  item-center w-full h-7 mb-8">
      <p className="text-xl font-medium text-[#6F6F6F] ">
        140 rezultata na vasu pretragu
      </p>
      <div className="flex gap-1">
        <DropComponent />
      </div>
    </div>
  );
}

export default SearchResults;
