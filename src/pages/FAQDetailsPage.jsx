import { useNavigate } from "react-router-dom";
import bvnRule from "../assets/pdfs/FAQ_Deatails-converted.pdf";

export default function FAQDetails() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center rounded-full justify-center gap-5">
      <iframe src={bvnRule} width="800" height="600"></iframe>
      <div className="w-4/6 flex justify-end">
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
