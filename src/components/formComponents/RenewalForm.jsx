import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function RenewalForm() {
  const { register, handleSubmit } = useForm();

  const generateOTP = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(generateOTP)}>
        <TextField
          id="user-id"
          label="Enter User Id *"
          variant="standard"
          className="w-full"
          {...register("user_id")}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-blue-base text-white w-full py-2 rounded-md mt-3 mb-2 hover:bg-slate-500 hover:duration-700"
        >
          GENERATE OTP
        </button>
      </form>
    </div>
  );
}
