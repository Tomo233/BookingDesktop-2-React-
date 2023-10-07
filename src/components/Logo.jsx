import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="flex gap-2 ml-10">
      <img src={logo} alt="logo" className="w-12 h-12 self-center" />
      <p className="text-xl font-semibold self-center">Booking</p>
    </div>
  );
}

export default Logo;
