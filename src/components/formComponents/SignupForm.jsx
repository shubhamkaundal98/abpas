import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

export default function SignupForm({
  handleCloseSignupModal,
  handleOpenSignupRenewalModal,
}) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const showData = (data) => {
    if (data.new) {
      navigate("/signup");
    } else if (data.renewal) {
      // handleCloseSignupModal();
      // handleOpenSignupRenewalModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <div className="flex gap-10">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              {...register("new")}
              value="new"
              control={<Radio />}
              label="New"
            />
            <FormControlLabel
              {...register("renewal")}
              value="renewal"
              control={<Radio />}
              label="Renewal"
            />
          </RadioGroup>
        </FormControl>
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
