import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import CitizenSignupForm from "../components/CitizenSignupForm";
import ConsultantSignupForm from "../components/ConsultantSignupForm";

export default function Signup() {
  const navigate = useNavigate();
  const [consultantSignup, setConsultantSignup] = useState(true);

  return (
    <div className="h-full bg-white flex flex-col mx-48 mb-5 gap-5">
      <div className="flex justify-between bg-[#337ab7] text-white px-5 py-2 rounded-sm">
        <h1>New User Registration</h1>
        <button onClick={() => navigate("/")}>CLOSE</button>
      </div>
      <div className="mx-3">
        <div className="flex items-center gap-5">
          <h1>Choose User Type</h1>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="consultant"
            >
              <FormControlLabel
                onClick={() => setConsultantSignup(true)}
                value="consultant"
                control={<Radio />}
                label="Consultant"
              />
              <FormControlLabel
                onClick={() => setConsultantSignup(false)}
                value="citizen"
                control={<Radio />}
                label="Citizen"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {consultantSignup ? <ConsultantSignupForm /> : <CitizenSignupForm />}
      </div>
    </div>
  );
}
