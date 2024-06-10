import { LoginForm } from "../components/components";

function Login() {
  return (
    <div className="h-[80vh] mt-36 flex justify-around">
      <div className="w-1/4">
        <LoginForm />
      </div>
      <div className="w-[20%] flex flex-col gap-2">
        <h1 className="text-3xl font-normal">Why Login?</h1>
        <p className="text-base">
          As a registered user, you can take benefits of Plan Scrutiny process
          through automated software which technically scrutinies your proposal.
          <span className="text-[#0288d1] hover:underline hover:text-blue-900">
            More
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
