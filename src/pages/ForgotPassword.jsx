import InputField from "../components/InputField";

export default function ForgotPassword() {
  return (
    <div className="h-[80vh] mt-36 flex justify-around">
      <div className="w-1/4">
        <InputField placeholder={"Enter User ID *"} />
        <button className="bg-[#337ab7] text-white w-full py-2 rounded-md mt-10 mb-2 hover:bg-slate-500 hover:duration-700">
          SEND
        </button>
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