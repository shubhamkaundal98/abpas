import { useNavigate } from "react-router-dom";
import { ReactTableComponent } from "../components/components";

export default function LayoutSketch() {
  const tabledata = [
    {
      s_no: "1",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "2",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Bholika Ashiyana",
    },
    {
      s_no: "3",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "4",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "5",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "6",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "7",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "8",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "9",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
    {
      s_no: "10",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
      layout: "Urbane Green",
    },
  ];

  const tablecolumns = [
    { Header: "S.No", accessor: "s_no" },
    { Header: "Division", accessor: "division" },
    { Header: "District", accessor: "district" },
    { Header: "Ulb", accessor: "ulb" },
    { Header: "Layout", accessor: "layout" },
  ];

  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col mx-44 gap-5">
      <div className="text-start mb-2 text-xl font-semibold">
        Layout Search Report:
      </div>

      <ReactTableComponent tableData={tabledata} tableColumns={tablecolumns} />
      <div className="w-full mb-3 flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-[#337ab7] text-white text-center px-5 py-2 rounded-sm hover:bg-slate-500 hover:duration-700"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
