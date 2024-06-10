import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function CitizenSearchForm() {
  const { register, handleSubmit } = useForm();

  const showData = (data) => {
    console.log(data);
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
              {...register("owner_search")}
              value="owner_search"
              control={<Radio />}
              label="Owner Search"
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
