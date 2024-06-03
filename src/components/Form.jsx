import { useState } from "react";
import InputField from "./InputField";
import { TbReload } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  return (
    <div>
      <InputField placeholder={"User Id *"} />
      <InputField placeholder={"Password *"} type="password" />
      <div className="flex justify-between items-end">
        <InputField placeholder={"Enter Captcha *"} />
        <div className="flex justify-evenly items-center w-1/2">
          <button onClick={() => refreshString()}>
            <TbReload className="text-[#0288d1] text-xl" />
          </button>
          <div className="border-2 border-blue-500 w-5/6 h-10 text-center pt-1 text-lg font-semibold">
            {captcha}
          </div>
        </div>
      </div>
      <button className="bg-[#337ab7] text-white w-full py-2 rounded-md mt-10 mb-2 hover:bg-slate-500 hover:duration-700">
        LOG IN
      </button>
      <div className="flex justify-between px-4 mb-2">
        <button
          className="text-[#0288d1] hover:underline hover:text-blue-900 text-sm"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </button>
        <button className="text-[#0288d1] hover:underline hover:text-blue-900 text-sm">
          Not yet Registered
        </button>
      </div>
      <Marquee>
        <span className="text-[#ff1300] font-semibold">
          CAPTCHA is mandatory
        </span>
      </Marquee>
    </div>
  );
}
