import { useForm } from "react-hook-form";
import TestInput from "./TestInput";
import TextField from "@mui/material/TextField";

export default function OnlinePaymentForm() {
  const { register, handleSubmit } = useForm();

  const showData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <div className="flex gap-10">
        <TextField
          id="reference_no"
          variant="standard"
          {...register("reference_no")}
          label={"Enter Reference No *"}
        />
        <TextField
          id="mobile_no"
          variant="standard"
          {...register("mobile_no")}
          label={"Enter Mobile Number *"}
        />
      </div>
      <div className="bg-slate-200 py-[0.5px] my-5 "></div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#337ab7] text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
