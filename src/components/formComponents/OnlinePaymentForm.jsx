import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  reference_no: z.string().min(2, { message: "This is required." }),
  mobile_no: z.string().min(2, { message: "This is required." }),
});

export default function OnlinePaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const showData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <div className="flex gap-10">
        <TextField
          error={errors.reference_no ? true : false}
          id="reference_no"
          variant="standard"
          {...register("reference_no")}
          label={"Enter Reference No *"}
          autoComplete="off"
        />
        <TextField
          error={errors.mobile_no ? true : false}
          id="mobile_no"
          variant="standard"
          {...register("mobile_no")}
          label={"Enter Mobile Number *"}
          autoComplete="off"
        />
      </div>
      <div className="bg-slate-200 py-[0.5px] my-5 "></div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-base text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
