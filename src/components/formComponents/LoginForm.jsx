import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";
import { TbReload } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function LoginForm() {
  const navigate = useNavigate();

  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(login)} className="flex flex-col gap-7">
        <TextField
          id="user-id"
          label="User Id *"
          variant="standard"
          className="w-full"
          {...register("user_id")}
          autoComplete="off"
        />
        <FormControl className="w-full" variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password *
          </InputLabel>
          <Input
            {...register("password")}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? (
                    <IoEye className="text-[#0288d1] text-lg" />
                  ) : (
                    <IoEyeOff className="text-[#0288d1] text-lg" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div className="flex justify-between items-end">
          <TextField
            autoComplete="off"
            {...register("captcha")}
            id="captcha"
            label="Enter Captcha *"
            variant="standard"
          />
          <div className="flex justify-evenly items-center w-1/2">
            <button
              onClick={(e) => {
                refreshString();
                e.preventDefault();
              }}
            >
              <TbReload className="text-[#0288d1] text-xl" />
            </button>
            <div className="border-2 border-blue-500 w-5/6 h-10 text-center pt-1 text-lg font-semibold">
              {captcha}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#337ab7] text-white w-full py-2 rounded-md mt-3 mb-2 hover:bg-slate-500 hover:duration-700"
        >
          LOG IN
        </button>
      </form>
      <div className="flex justify-between px-4 mb-2">
        <button
          className="text-[#0288d1] hover:underline hover:text-blue-900 text-sm"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-[#0288d1] hover:underline hover:text-blue-900 text-sm"
        >
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

export default LoginForm;
