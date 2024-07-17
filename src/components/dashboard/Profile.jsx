import TextField from "@mui/material/TextField";
import { TbReload } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const schema = z.object({
  captcha: z.string().min(2, { message: "This is required" }),
  confirm_password: z.string().min(2, { message: "This is required" }),
  password: z.string().min(2, { message: "This is required" }),
  user_address: z.string().min(2, { message: "Enter address" }),
  user_email: z.string().min(2, { message: "Enter a valid email" }),
  user_id: z
    .string()
    .min(2, { message: "User ID should not contain Special characters" }),
  user_mobile: z.string().min(2, { message: "Enter a valid Mobile no" }),
  user_name: z.string().min(2, { message: "Enter a valid Name" }),
});

const ProfileComponent = () => {
  const randomString = Math.random().toString(36).slice(8);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [userType, setUserType] = useState("");

  return (
    <div className="w-full">
      <div
        className="text-left font-bold bg-white text-black p-4 border-b-2 border-black"
        id="FileStats"
      >
        <h1 className="text-[#2883dd] font-bold text-xl">Profile</h1>
      </div>
      <form onSubmit={handleSubmit()} className="flex flex-col gap-3 px-4">
        <div className="grid grid-cols-2 items-center gap-4 py-2">
          <TextField
            error={errors.user_name ? true : false}
            helperText={errors.user_name && errors.user_name.message}
            id="user-name"
            label="Name *"
            variant="standard"
            className="w-full"
            {...register("user_name")}
            autoComplete="off"
          />
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
        </div>
        <div className="grid grid-cols-1 items-center gap-4 py-2">
          <TextField
            error={errors.user_address ? true : false}
            helperText={errors.user_address && errors.user_address.message}
            id="user-address"
            label="Address *"
            variant="standard"
            className="w-full"
            {...register("user_address")}
            autoComplete="off"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4 py-2">
          <TextField
            error={errors.user_mobile ? true : false}
            helperText={errors.user_mobile && errors.user_mobile.message}
            id="user-mobile"
            label="Mobile*"
            variant="standard"
            className="w-full"
            {...register("user_mobile")}
            autoComplete="off"
          />
          <TextField
            error={errors.user_email ? true : false}
            helperText={errors.user_email && errors.user_email.message}
            id="user-email"
            label="Email *"
            variant="standard"
            className="w-full"
            {...register("user_email")}
            autoComplete="off"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4 py-2">
          <TextField
            error={errors.department ? true : false}
            helperText={errors.department && errors.department.message}
            id="department"
            label="Department *"
            variant="standard"
            className="w-full"
            {...register("department")}
            autoComplete="off"
          />
          <TextField
            error={errors.token ? true : false}
            helperText={errors.token && errors.token.message}
            id="token"
            label="Token *"
            variant="standard"
            className="w-full"
            {...register("token")}
            autoComplete="off"
          />
        </div>

        <div className="flex justify-between text-blue-700 px-1 my-2 rounded-sm">
          Change Password
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 items-center gap-4 py-2">
            <TextField
              error={errors.password ? true : false}
              helperText={errors.password && errors.password.message}
              id="user-password"
              label="Password *"
              variant="standard"
              className="w-full"
              {...register("password")}
              autoComplete="off"
            />
            <TextField
              error={errors.confirm_password ? true : false}
              helperText={
                errors.confirm_password && errors.confirm_password.message
              }
              id="user-confirm-password"
              label="Confirm Password *"
              variant="standard"
              className="w-full"
              {...register("confirm_password")}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="flex justify-centre align-middle right-0">
          <button
            type="submit"
            className="bg-blue-base text-white w-1/6 py-2 rounded-md mt-3 mb-2 hover:bg-slate-500 hover:duration-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileComponent;
