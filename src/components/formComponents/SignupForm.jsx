import { useForm, Controller } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

export default function SignupForm({
  handleCloseSignupModal,
  handleOpenSignupRenewalModal,
}) {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const showData = (data) => {
    if (data.signup_type === "new") {
      navigate("/signup");
    } else if (data.signup_type === "renewal") {
      handleCloseSignupModal();
      handleOpenSignupRenewalModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <div className="flex gap-10">
        <Controller
          control={control}
          name="signup_type"
          render={({ field }) => (
            <FormControl {...field}>
              <RadioGroup
                row
                aria-labelledby="row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="new" control={<Radio />} label="New" />
                <FormControlLabel
                  value="renewal"
                  control={<Radio />}
                  label="Renewal"
                />
              </RadioGroup>
            </FormControl>
          )}
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
