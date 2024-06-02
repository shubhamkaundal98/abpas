import InputField from "./InputField";

export default function Form() {
  return (
    <div>
      <InputField placeholder={"User Id"} />
      <InputField placeholder={"Password"} type="password" />
      <div className="flex justify-between items-center">
        <InputField placeholder={"Enter Captcha"} />
        <p>captcha</p>
      </div>
      <button className="bg-[#337ab7] text-white w-full py-2 rounded-md mt-10">
        LOG IN
      </button>
    </div>
  );
}
