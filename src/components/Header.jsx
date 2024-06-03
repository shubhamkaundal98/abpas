import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

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
      <div className="flex gap-2 items-center">
        <div
          onClick={() => navigate("/")}
          className="text-[#0288d1] hover:underline hover:text-blue-900 hover:cursor-pointer flex items-center gap-1"
        >
          <span>Home</span>
          <FaHome className="text-[#0288d1]" />
        </div>
        <div className="bg-black h-8 w-[1px]"></div>
        <div
          onClick={() => navigate("/login")}
          className="text-[#0288d1] hover:underline hover:text-blue-900 hover:cursor-pointer flex items-center gap-1"
        >
          <span>Sign in</span>
          <PiUserCircleFill className="text-[#0288d1]" />
        </div>
      </div>
    </div>
  );
}

export default Header;
