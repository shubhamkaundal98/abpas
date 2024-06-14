import { useNavigate } from "react-router-dom";
import { tabledataone } from "../store/jsonDatas/buildingplanningJsonData/data";
import { tabledatatwo } from "../store/jsonDatas/completionJsonData/data";
import { tabledatathree } from "../store/jsonDatas/plinthJsonData/data";
import { ReactTableComponent } from "../components/components";
import { useState } from "react";

export default function EoDBReport() {
  const [firstTable, setfirstTable] = useState(true);
  const [secondTable, setSecondTable] = useState(false);
  const [thirdTable, setThirdTable] = useState(false);

  const tablecolumns = [
    { Header: "S.No", accessor: "s_no" },
    { Header: "Division", accessor: "division" },
    { Header: "District", accessor: "district" },
    { Header: "Ulb Name", accessor: "ulb_name" },
    {
      Header: "U L B Type (Naga...",
      accessor: "ulb_type",
    },
    { Header: "S L A Time", accessor: "sla_time" },
    { Header: "Submitted", accessor: "submitted" },
    { Header: "Sanctioned", accessor: "sanctioned" },
    { Header: "Average", accessor: "average" },
    { Header: "Median", accessor: "median" },
    { Header: "Min Days Taken...", accessor: "min_days_taken" },
    { Header: "Max Days Taken...", accessor: "max_days_taken" },
  ];

  const navigate = useNavigate();

  const changeToFirstTable = () => {
    setfirstTable(true);
    setSecondTable(false);
    setThirdTable(false);
  };

  const changeToSecondTable = () => {
    setfirstTable(false);
    setSecondTable(true);
    setThirdTable(false);
  };

  const changeToThirdTable = () => {
    setfirstTable(false);
    setSecondTable(false);
    setThirdTable(true);
  };

  return (
    <div className="h-full mx-44">
      <div className="text-start mb-2 text-xl font-semibold">EoDB Reports:</div>

      {firstTable && (
        <ReactTableComponent
          tableData={tabledataone}
          tableColumns={tablecolumns}
        />
      )}
      {secondTable && (
        <ReactTableComponent
          tableData={tabledatatwo}
          tableColumns={tablecolumns}
        />
      )}
      {thirdTable && (
        <ReactTableComponent
          tableData={tabledatathree}
          tableColumns={tablecolumns}
        />
      )}
      <div className="text-sm font-normal">
        <ol>
          <li>1. The Data is Updated on Weekly Basis.</li>
          <li>2. Last Updated on 08.01.2024 at 04.30 PM</li>
          <li>3. Data Available Since 1st April 2018.</li>
        </ol>
      </div>
      <div className="flex justify-between py-4 px-2">
        <div className="flex gap-4">
          <button
            onClick={() => changeToFirstTable()}
            className="bg-blue-base text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
          >
            BUILDING PLAN DETAILS
          </button>
          <button
            onClick={() => changeToSecondTable()}
            className="bg-blue-base text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
          >
            PLINTH DETAILS
          </button>
          <button
            onClick={() => changeToThirdTable()}
            className="bg-blue-base text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
          >
            COMPLETION DETAILS
          </button>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-base text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
