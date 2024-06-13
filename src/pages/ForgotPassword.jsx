import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  user_id: z.string().min(2, { message: "This is required." }),
});

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const sendData = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[80vh] mt-36 flex justify-around">
      <div className="w-1/4">
        <form onSubmit={handleSubmit(sendData)}>
          <TextField
            error={errors.user_id ? true : false}
            helperText={errors.user_id && errors.user_id.message}
            id="user-id"
            label="Enter User ID *"
            variant="standard"
            className="w-full"
            {...register("user_id")}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-blue-base text-white w-full py-2 rounded-md mt-10 mb-2 hover:bg-slate-500 hover:duration-700"
          >
            SEND
          </button>
        </form>
      </div>
      <div className="w-[20%] flex flex-col gap-2">
        <h1 className="text-3xl font-normal">Forgot Password?</h1>
        <p className="text-base">
          If the Mobile Number entered is associated with user account in our
          records,you will receive an Message from us .If you dont receive this
          Message,please contect help desk.
        </p>
      </div>
    </div>
  );
}
