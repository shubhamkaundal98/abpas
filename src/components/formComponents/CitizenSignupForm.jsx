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
  user_city: z.string().min(2, { message: "Enter a valid city" }),
  user_email: z.string().min(2, { message: "Enter a valid email" }),
  user_id: z
    .string()
    .min(2, { message: "User ID should not contain Special characters" }),
  user_id_proof_number: z.string().min(2, { message: "Enter ID Proof Number" }),
  user_mobile: z.string().min(2, { message: "Enter a valid Mobile no" }),
  user_name: z.string().min(2, { message: "Enter a valid Name" }),
  user_pincode: z.string().min(2, { message: "Enter a valid Pin Code" }),
  user_state: z.string().min(2, { message: "Enter a valid State" }),
  user_type: z.string().min(2, { message: "Specify User type" }),
  user_ulb: z.string().min(2, { message: "This is required" }),
});

export default function ConsultantSignupForm() {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const uploadData = (data) => {
    console.log(data);
  };

  const [userType, setUserType] = useState("");

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(uploadData)} className="flex flex-col gap-3">
      <div className="flex justify-between bg-purple-600 text-white px-5 py-2 rounded-sm">
        Personal Details
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
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
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 175 }}
          error={errors.user_type ? true : false}
        >
          <InputLabel id="user-type-input">Select a division *</InputLabel>
          <Select
            {...register("user_type")}
            labelId="user-type-input"
            id="user-type"
            onChange={handleUserType}
            value={userType}
            label="Select Type of User *"
          >
            <MenuItem value={"Citizen"}>Citizen</MenuItem>
          </Select>
          <FormHelperText>
            {errors.user_type && errors.user_type.message}
          </FormHelperText>
        </FormControl>
        <TextField
          error={errors.user_id_proof_number ? true : false}
          helperText={
            errors.user_id_proof_number && errors.user_id_proof_number.message
          }
          id="user-id-proof-number"
          label="ID Proof Number *"
          variant="standard"
          className="w-full"
          {...register("user_id_proof_number")}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-between bg-purple-600 text-white px-5 py-2 rounded-sm">
        Contact Details
      </div>
      <div>
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
        <div className="flex gap-1">
          <TextField
            error={errors.user_state ? true : false}
            helperText={errors.user_state && errors.user_state.message}
            id="user-state"
            label="State *"
            variant="standard"
            className="w-full"
            {...register("user_state")}
            autoComplete="off"
          />
          <TextField
            error={errors.user_city ? true : false}
            helperText={errors.user_city && errors.user_city.message}
            id="user-city"
            label="City *"
            variant="standard"
            className="w-full"
            {...register("user_city")}
            autoComplete="off"
          />
          <TextField
            error={errors.user_pincode ? true : false}
            helperText={errors.user_pincode && errors.user_pincode.message}
            id="user-pincode"
            label="Pin Code *"
            variant="standard"
            className="w-full"
            {...register("user_pincode")}
            autoComplete="off"
          />
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
      </div>

      <div className="flex justify-between bg-purple-600 text-white px-5 py-2 rounded-sm">
        Login Details
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex gap-1">
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
        <TextField
          error={errors.user_ulb ? true : false}
          helperText={errors.user_ulb && errors.user_ulb.message}
          id="user-ulb"
          label="Type to search ULB *"
          variant="standard"
          className="w-full"
          {...register("user_ulb")}
          autoComplete="off"
        />
        <div className="flex">
          <TextField
            error={errors.captcha ? true : false}
            helperText={errors.captcha && errors.captcha.message}
            autoComplete="off"
            {...register("captcha")}
            id="captcha"
            label="Enter Captcha *"
            variant="standard"
          />
          <div className="flex gap-2 items-center w-1/2">
            <button
              onClick={(e) => {
                refreshString();
                e.preventDefault();
              }}
            >
              <TbReload className="text-[#0288d1] text-xl" />
            </button>
            <div className="border-2 border-blue-500 w-2/6 h-10 text-center pt-1 text-lg font-semibold">
              {captcha}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-base text-white w-1/4 py-2 rounded-md mt-3 mb-2 hover:bg-slate-500 hover:duration-700"
        >
          CLICK TO UPLOAD DOCUMENTS
        </button>
      </div>
    </form>
  );
}
