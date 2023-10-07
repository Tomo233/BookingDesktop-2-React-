import Box from "./Box";
function Boxes({ boxes }) {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold  mt-4 mb-8">
        Budva, Crna Gora, Apartman
      </h1>
      {[...boxes]?.map((box) => (
        <Box key={box.id} box={box} />
      ))}
    </div>
  );
}

export default Boxes;
