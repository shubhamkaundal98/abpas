import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";

export default function ListConsultant() {
  const tabledata = [
    {
      s_no: "1",
      name: "Mr. Nitin Bardia",
      type: "Supervisor",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
    },
    {
      s_no: "2",
      name: "Mr. Nitin Bardia",
      type: "Supervisor",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
    },
    {
      s_no: "3",
      name: "A G PATHAK",
      type: "Citizen",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Bhopal",
      district: "Bhopal",
      ulb: "Bhopal",
    },
    {
      s_no: "4",
      name: "Mr. Nitin Bardia",
      type: "Supervisor",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
    },
    {
      s_no: "5",
      name: "A G PATHAK",
      type: "Citizen",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Bhopal",
      district: "Bhopal",
      ulb: "Bhopal",
    },
    {
      s_no: "6",
      name: "Mr. Nitin Bardia",
      type: "Supervisor",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
    },
    {
      s_no: "7",
      name: "A G PATHAK",
      type: "Citizen",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Bhopal",
      district: "Bhopal",
      ulb: "Bhopal",
    },
    {
      s_no: "8",
      name: "Mr. Nitin Bardia",
      type: "Supervisor",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
    },
    {
      s_no: "9",
      name: "A G PATHAK",
      type: "Citizen",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Bhopal",
      district: "Bhopal",
      ulb: "Bhopal",
    },
    {
      s_no: "10",
      name: "Mr. Nitin Bardia",
      type: "Supervisor",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Indore",
      district: "Burhanpur",
      ulb: "Burhanpur",
    },
    {
      s_no: "11",
      name: "A G PATHAK",
      type: "Citizen",
      mobile: "123456789",
      email_id: "test@test.com",
      division: "Bhopal",
      district: "Bhopal",
      ulb: "Bhopal",
    },
  ];

  const tablecolumns = [
    { Header: "S.No", accessor: "s_no" },
    { Header: "Name", accessor: "name" },
    { Header: "Type", accessor: "type" },
    { Header: "Mobile", accessor: "mobile" },
    {
      Header: "Email Id",
      accessor: "email_id",
    },
    { Header: "Division", accessor: "division" },
    { Header: "District", accessor: "district" },
    { Header: "Ulb", accessor: "ulb" },
  ];

  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col mx-44 gap-5">
      <div className="bg-[#337ab7] text-white text-center text-xl px-5 py-2 rounded-sm">
        List of Consultants
      </div>
      <TableComponent tableData={tabledata} tableColumns={tablecolumns} />
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
