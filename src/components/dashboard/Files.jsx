// src/Dashboard.js
import React, { useState } from 'react';
import { ReactTableComponent } from "../../components/components";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const Files = (props) => {
  const [submissionDate1, setSubmissionDate1] = useState('');
  const [submissionDate2, setSubmissionDate2] = useState('');
  const [myfilesrefno, setMyfilesrefno] = useState('');
  const [status, setStatus] = useState('');
  const title = props.status ? props.status.title : 'My Files';
  const schema = z.object({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [userType, setUserType] = useState("");
  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const FromDateCheck = () => {
    // Your logic for From Date check
  };

  const ToDateCheck = () => {
    // Your logic for To Date check
  };

  const loadStatus = () => {
    // Your logic for loading status
  };

  const clearStatId = () => {
    setStatus('');
  };

  const search = (param) => {
    // Your search logic
  };

  const tabledata = [
    {
      "UniqId": "UJJ/AGA/AGA/0243/021/2024",
      "IsAuthArch": "N",
      "ParentZone": "5",
      "ParentWard": "24",
      "ParentColony": "*",
      "ApplicantName": "sagar",
      "ApplicantAddress": "bhopal",
      "SubmissionDate": "22-Jun-2024",
      "ArchVisibleStatus": "Returned",
    },
    {
      "UniqId": "UJJ/AGA/AGA/0243/021/2024",
      "IsAuthArch": "N",
      "ParentZone": "5",
      "ParentWard": "24",
      "ParentColony": "*",
      "ApplicantName": "sagar",
      "ApplicantAddress": "bhopal",
      "SubmissionDate": "22-Jun-2024",
      "ArchVisibleStatus": "Returned",
    },
    {
      "UniqId": "UJJ/AGA/AGA/0243/021/2024",
      "IsAuthArch": "N",
      "ParentZone": "5",
      "ParentWard": "24",
      "ParentColony": "*",
      "ApplicantName": "sagar",
      "ApplicantAddress": "bhopal",
      "SubmissionDate": "22-Jun-2024",
      "ArchVisibleStatus": "Returned",
    },
    {
      "UniqId": "UJJ/AGA/AGA/0243/021/2024",
      "IsAuthArch": "N",
      "ParentZone": "5",
      "ParentWard": "24",
      "ParentColony": "*",
      "ApplicantName": "sagar",
      "ApplicantAddress": "bhopal",
      "SubmissionDate": "22-Jun-2024",
      "ArchVisibleStatus": "Returned",
    },
    {
      "UniqId": "UJJ/AGA/AGA/0243/021/2024",
      "IsAuthArch": "N",
      "ParentZone": "5",
      "ParentWard": "24",
      "ParentColony": "*",
      "ApplicantName": "sagar",
      "ApplicantAddress": "bhopal",
      "SubmissionDate": "22-Jun-2024",
      "ArchVisibleStatus": "Returned",
    },
  ];

  const tablecolumns = [
    { Header: "Date of Submission", accessor: "SubmissionDate" },
    { Header: "Reference No", accessor: "UniqId" },
    { Header: "Zone", accessor: "ParentZone" },
    { Header: "Ward", accessor: "ParentWard" },
    { Header: "Colony", accessor: "ParentColony" },
    { Header: "Applicant Name", accessor: "ApplicantName" },
    { Header: "Status", accessor: "ArchVisibleStatus" },
    { Header: "Applicant Address", accessor: "ApplicantAddress" },
    { Header: "Action", accessor: "layout" },
  ];

  return (
    <div className="w-full">
      <div className="text-left font-bold bg-white text-black p-4 border-b-2 border-black" id="FileStats">
        <h1 className="text-[#2883dd] font-bold text-xl">{title}</h1>
      </div>
      <div className="text-center font-bold bg-white text-black p-4" id="FileStats">
        <form onSubmit={handleSubmit()} className="flex flex-col gap-3">
          <div className="grid grid-cols-5 gap-4">
            {/* <DatePicker
              id="from-date"
              label="from Date"
              variant="standard"
              className="w-full"
              {...register("from_date")}
              autoComplete="off"
            />
            <DatePicker
              id="to-date"
              label="To Date"
              variant="standard"
              className="w-full"
              {...register("to_date")}
              autoComplete="off"
            /> */}
            <TextField
              error={errors.from_date ? true : false}
              helperText={errors.from_date && errors.from_date.message}
              id="from-date"
              label="From Date"
              variant="standard"
              className="w-full"
              {...register("from_date")}
              autoComplete="off"
            />
            <TextField
              error={errors.to_date ? true : false}
              helperText={errors.to_date && errors.to_date.message}
              id="to-date"
              label="To Date"
              variant="standard"
              className="w-full"
              {...register("to_date")}
              autoComplete="off"
            />
            <TextField
              error={errors.reference_no ? true : false}
              helperText={errors.reference_no && errors.reference_no.message}
              id="reference-number"
              label="Reference No"
              variant="standard"
              className="w-full"
              {...register("reference_no")}
              autoComplete="off"
            />
            {title === 'My Files' && (
              <FormControl
                variant="standard"
                sx={{ minWidth: 175 }}
                error={errors.user_type ? true : false}
              >
                <InputLabel id="user-type-input">Select</InputLabel>
                <Select
                  {...register("user_type")}
                  labelId="user-type-input"
                  id="user-type"
                  onChange={handleUserType}
                  value={userType}
                  label="Select Type of User *"
                >
                </Select>
              </FormControl>
            )}
            <div className="flex justify-center align-middle right-0">
              <button
                type="submit"
                className="bg-neutral-500 text-white w-1/2 py-1 rounded-md hover:bg-slate-500 hover:duration-700"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <ReactTableComponent tableData={tabledata} tableColumns={tablecolumns} />
    </div>
  );
};

export default Files;
