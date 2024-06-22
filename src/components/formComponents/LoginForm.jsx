import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { TbReload } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  user_id: z.string().min(2, { message: "This is required." }),
  password: z.string().min(2, { message: "This is required." }),
  captcha: z.string().min(2, { message: "This is required." }),
});

function LoginForm() {
  const navigate = useNavigate();

  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    setShowPassword((show) => !show);
    e.preventDefault();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const login = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(login)} className="flex flex-col gap-7">
        <TextField
          error={errors.user_id ? true : false}
          helperText={errors.user_id && errors.user_id.message}
          id="user-id"
          label="User Id *"
          variant="standard"
          className="w-full"
          {...register("user_id")}
          autoComplete="off"
        />
        {/* <div className="flex items-baseline">
          <TextField
            error={errors.password ? true : false}
            helperText={errors.password && errors.password.message}
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="standard"
            {...register("password")}
            className="w-full"
          />
          <button
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? (
              <IoEye className="text-blue-base text-lg" />
            ) : (
              <IoEyeOff className="text-blue-base text-lg" />
            )}
          </button>
        </div> */}
        <FormControl
          className="w-full"
          variant="standard"
          error={errors.password ? true : false}
        >
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
                    <IoEye className="text-blue-base text-lg" />
                  ) : (
                    <IoEyeOff className="text-blue-base text-lg" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>
            {errors.user_id && errors.user_id.message}
          </FormHelperText>
        </FormControl>

        <div className="flex justify-between items-end">
          <TextField
            error={errors.captcha ? true : false}
            helperText={errors.captcha && errors.captcha.message}
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
              <TbReload className="text-blue-base text-xl" />
            </button>
            <div className="border-2 border-blue-base w-5/6 h-10 text-center pt-1 text-lg font-semibold">
              {captcha}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-base text-white w-full py-2 rounded-md mt-3 mb-2 hover:bg-slate-500 hover:duration-700"
          onClick={() => navigate("/ArchDashboard")}
        >
          LOG IN
        </button>
      </form>
      <div className="flex justify-between px-4 mb-2">
        <button
          className="text-blue-base hover:underline hover:text-blue-900 text-sm"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-blue-base hover:underline hover:text-blue-900 text-sm"
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
