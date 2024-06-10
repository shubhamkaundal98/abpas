import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material";
import { TbReload } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CitizenSignupForm() {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);

  const refreshString = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };
  const { register, handleSubmit } = useForm();

  const uploadData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(uploadData)} className="flex flex-col gap-3">
      <div className="flex justify-between bg-purple-500 text-white px-5 py-2 rounded-sm">
        Personal Details
      </div>
      <div className="flex gap-2">
        <TextField
          id="user-name"
          label="Name *"
          variant="standard"
          className="w-full"
          {...register("user_name")}
          autoComplete="off"
        />
        <TextField
          id="user-type"
          label="Select Type of User *"
          variant="standard"
          className="w-full"
          {...register("user_type")}
          autoComplete="off"
        />
        <TextField
          id="user-id-proof-number"
          label="ID Proof Number *"
          variant="standard"
          className="w-full"
          {...register("user_id_proof_number")}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-between bg-purple-500 text-white px-5 py-2 rounded-sm">
        Contact Details
      </div>
      <div>
        <TextField
          id="user-address"
          label="Address *"
          variant="standard"
          className="w-full"
          {...register("user_address")}
          autoComplete="off"
        />
        <div className="flex gap-1">
          <TextField
            id="user-state"
            label="State *"
            variant="standard"
            className="w-full"
            {...register("user_state")}
            autoComplete="off"
          />
          <TextField
            id="user-city"
            label="City *"
            variant="standard"
            className="w-full"
            {...register("user_city")}
            autoComplete="off"
          />
          <TextField
            id="user-pincode"
            label="Pin Code *"
            variant="standard"
            className="w-full"
            {...register("user_pincode")}
            autoComplete="off"
          />
          <TextField
            id="user-mobile"
            label="Mobile*"
            variant="standard"
            className="w-full"
            {...register("user_mobile")}
            autoComplete="off"
          />
          <TextField
            id="user-email"
            label="Email *"
            variant="standard"
            className="w-full"
            {...register("user_email")}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex justify-between bg-purple-500 text-white px-5 py-2 rounded-sm">
        Login Details
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex gap-1">
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
              type="password"
              autoComplete="off"
            />
          </FormControl>
          <FormControl className="w-full" variant="standard">
            <InputLabel htmlFor="standard-adornment-confirm-password">
              Confirm Password *
            </InputLabel>
            <Input
              {...register("confirm_password")}
              id="standard-adornment-confirm-password"
              type="password"
              autoComplete="off"
            />
          </FormControl>
        </div>
        <TextField
          id="user-ulb"
          label="Type to search ULB *"
          variant="standard"
          className="w-full"
          {...register("user_ulb")}
          autoComplete="off"
        />
        <div className="flex">
          <TextField
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
          className="bg-[#337ab7] text-white w-1/4 py-2 rounded-md mt-3 mb-2 hover:bg-slate-500 hover:duration-700"
        >
          CLICK TO UPLOAD DOCUMENTS
        </button>
      </div>
    </form>
  );
}
