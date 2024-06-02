import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-around my-5 mx-24">
      <div>
        <img
          src={logo}
          alt="MadhyaPradesh-Shashan"
          className="w-24 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-2xl text-[#0288d1] font-medium">
          AUTOMATED BUILDING PLAN APPROVAL SYSTEM-II
        </div>
        <div className="text-[17px] font-medium">
          Urban Development and Housing Department - MADHYA PRADESH
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => navigate("/")}
          className="text-[#0288d1] hover:underline hover:text-blue-900"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-[#0288d1] hover:underline hover:text-blue-900"
        >
          Sign in(logo)
        </button>
      </div>
    </div>
  );
}

export default Header;
