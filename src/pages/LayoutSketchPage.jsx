import { useNavigate } from "react-router-dom";

export default function LayoutSketch() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      layoutsketchpage
      <div className="w-4/6 flex justify-end">
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
