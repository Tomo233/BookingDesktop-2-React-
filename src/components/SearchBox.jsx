function SearchBox({ img, placeholder }) {
  return (
    <div>
      <div className="flex justify-between">
        <img src={img} className="w-7 h-7 mt-2 mr-2" alt={img} />
        <input
          type="text"
          placeholder={placeholder}
          className="w-60 h-10 rounded-2xl pl-3 mb-6 outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBox;
