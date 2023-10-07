import profile from "../assets/profile.png";
import downArrow from "../assets/arrow-down.png";

function Profile() {
  return (
    <div className="flex mr-16">
      <img
        src={profile}
        alt="profilna"
        className="w-12 h-12 self-center mr-2"
      />
      <img src={downArrow} alt="strelica" className="w-5 h-5 self-center" />
    </div>
  );
}

export default Profile;
