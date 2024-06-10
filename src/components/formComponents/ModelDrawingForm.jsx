import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { districts, divisions, ulbies } from "../../jsonDatas/jsondata";

export default function ModelDrawingForm() {
  const { register, handleSubmit } = useForm();

  const [selectDivision, setSelectDivision] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");
  const [selectUlb, setSelectUlb] = useState("");

  const [division, setDivision] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ulb, setUlb] = useState([]);

  useEffect(() => {
    setDivision(divisions);
  }, []);

  const handleDivision = (event) => {
    setSelectDivision(event.target.value);
    const filteredDistricts = districts.filter(
      (district) => district.divisionId === event.target.value
    );
    setDistrict(filteredDistricts);
    setSelectDistrict("");
    setSelectUlb("");
  };

  const handleDistrict = (event) => {
    setSelectDistrict(event.target.value);
    const filteredUlbies = ulbies.filter(
      (ulb) => ulb.districtId === event.target.value
    );
    setUlb(filteredUlbies);
    setSelectUlb("");
  };

  const handleUlb = (event) => {
    setSelectUlb(event.target.value);
  };

  const showData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <div className="flex gap-10">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 175 }}>
          <InputLabel id="division-input">Select a division</InputLabel>
          <Select
            {...register("division")}
            labelId="division-input"
            id="division-select-standard"
            onChange={handleDivision}
            value={selectDivision}
            label="division"
          >
            {division && division !== undefined
              ? division.map((x, index) => {
                  return (
                    <MenuItem key={index} value={x.id}>
                      {x.name}
                    </MenuItem>
                  );
                })
              : ""}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 175 }}>
          <InputLabel id="district-input">Select a district</InputLabel>
          <Select
            {...register("district")}
            labelId="district-input"
            id="district-select-standard"
            label="District"
            value={selectDistrict}
            onChange={handleDistrict}
          >
            {district && district !== undefined
              ? district.map((x, index) => {
                  return (
                    <MenuItem key={index} value={x.id}>
                      {x.name}
                    </MenuItem>
                  );
                })
              : ""}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 175 }}>
          <InputLabel id="ulb-input">Select a ULB</InputLabel>
          <Select
            {...register("ulb")}
            labelId="ulb-input"
            id="ulb-select-standard"
            label="Ulb"
            value={selectUlb}
            onChange={handleUlb}
          >
            {ulb && ulb !== undefined
              ? ulb.map((x, index) => {
                  return (
                    <MenuItem key={index} value={x.id}>
                      {x.name}
                    </MenuItem>
                  );
                })
              : ""}
          </Select>
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
