import { useState } from "react";

function Enquiry({
  image,
  topHeading,
  topSubheading,
  bottomHeading,
  handleOpenMenu,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-2 text-white w-56">
      <div
        onClick={handleOpenMenu}
        className={`hover:cursor-pointer overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img
            src={image}
            className={`w-full h-36 rounded-t-sm duration-1000 ${
              isHovered ? "scale-125" : ""
            }`}
          />
        </div>
        <div className="bg-[#0288d1] flex flex-col items-center gap-2 py-5 px-5 rounded-b-sm h-28">
          <p className="text-xl">{topHeading}</p>
          <p className="text-center text-sm">{topSubheading}</p>
        </div>
      </div>
      <div className="bg-[#0288d1] hover:cursor-pointer">
        <p className="text-center">{bottomHeading}</p>
      </div>
    </div>
  );
}

export default Enquiry;
