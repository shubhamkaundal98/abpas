import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-around bg-slate-500 pt-3 pb-3">
        <div className="ticker-wrap bg-gray-900">
          <div className="ticker">
            <div className="ticker_item text-white">
              105 वर्गमीटर तक के आवासीय भूखंडो के लिए तुरंत/डीम्ड स्वीकृति के नए
              नियमों के अनुसार ऑनलाइन व्यवस्था लागू कर दी गई है, कृपया इस सुविधा
              का लाभ लेने के लिए ABPAS पोर्टल के माध्यम से ऑनलाइन अपना आवेदन
              दर्ज करें।
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around bg-img bg-blue-base pt-4 pb-3">
        <div className="flex">
          <img
            src={logo}
            alt="MadhyaPradesh-Shashan"
            className="w-16 rounded-full mr-3"
          />
          <div className=" text-left text-2xl text-white font-medium">
            AUTOMATED BUILDING PLAN APPROVAL SYSTEM-II
            <div className="text-[17px] text-black font-medium">
              Urban Development and Housing Department - MADHYA PRADESH
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div
            onClick={() => navigate("/")}
            class="p-2 btn btn-fuchsia text-white !bg-[#212120] border-[#4e4b4c] hover:text-white hover:bg-[#989497] hover:border-[#8c888a] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e668b3] active:border-[#e668b3]  !rounded-[0.8rem] mx-1 flex items-center gap-1"
          >
            <FaHome className="text-white" />
            <span>Home</span>
          </div>

          <div
            onClick={() => navigate("/login")}
            className="p-2 btn btn-fuchsia text-black !bg-[#fff] border-[#e668b3] hover:text-black hover:bg-[#e668b3] hover:border-[#e668b3] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e668b3] active:border-[#e668b3]  !rounded-[0.8rem] mx-1 flex items-center gap-1"
          >
            <PiUserCircleFill className="text-black" /> <span>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
