import { useState } from "react";

function Enquiry({
  image,
  topHeading,
  topSubheading,
  bottomHeading,
  topOpenFunction,
  bottomOpenFunction,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-2 text-white w-56">
      <div
        onClick={topOpenFunction}
        className={`hover:cursor-pointer overflow-hidden rounded`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className=" bg-white border-dashed border-cyan-600 border-2 flex flex-col items-center gap-2 p-8 
        rounded-full"
        >
          <img
            src={image}
            className={` w-16 m-auto rounded-t-sm duration-1000 ${
              isHovered ? "scale-125" : ""
            }`}
          />
          <p className="text-xl text-cyan-700">{topHeading}</p>
          <p className="text-center text-sm text-gray-700">{topSubheading}</p>
        </div>
      </div>
      <div
        onClick={bottomOpenFunction}
        className="bg-blue-base hover:cursor-pointer"
      >
        <p className="text-center">{bottomHeading}</p>
      </div>
    </div>
  );
}

export default Enquiry;
