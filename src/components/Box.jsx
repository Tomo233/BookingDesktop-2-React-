/* eslint-disable react/prop-types */
function Box({ box }) {
  return (
    <div
      className="flex justify-around gap-8 max-w-3xl w-[736px] h-72 shadow-[0_5px_15px_rgba(0,0,0,0.35)]
    relative rounded-xl mb-10"
    >
      <div className="ml-12 mt-7 ">
        <img src={box.image} alt="vila" />
      </div>

      <div className="grid gap-0">
        <div className=" mt-5  ">
          <h3 className="text-2xl	font-medium mb-1">{box.heading}</h3>
          <p className="text-[#6F6F6F] font-medium text-xl mb-1">
            {box.location}
          </p>
          <p className="text-[#6F6F6F] font-medium mb-1">
            Ocena : {box.rating}{" "}
          </p>
        </div>

        <div>
          <p className="text-[#6F6F6F] font-medium">{box.rooms} soba</p>
          <p className="text-[#6F6F6F] font-medium">
            {box.apartment} apartmana
          </p>
          <p className="text-[#6F6F6F] font-medium">{box.duplex} duplex</p>
        </div>
      </div>

      <div className="grid mr-11">
        <p className="my-7 mx-auto">{box.views} pregleda</p>
        <button className="text-[#fff] font-semibold w-40 h-12 bg-[#3871C8] rounded-3xl self-end mb-8  ">
          {box.price}$
        </button>
      </div>
    </div>
  );
}

export default Box;
