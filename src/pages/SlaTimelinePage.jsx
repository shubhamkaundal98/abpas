import { useNavigate } from "react-router-dom";
import slaImage from "../assets/sla.png";

export default function SlaTimeline() {
  const navigate = useNavigate();

  return (
    <div className="h-[75vh] flex flex-col items-center gap-5">
      <img
        src={slaImage}
        alt="sla_for_building_permission"
        className="w-[45%]"
      />

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
