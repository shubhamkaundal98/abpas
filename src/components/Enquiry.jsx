function Enquiry({
  image,
  topHeading,
  topSubheading,
  bottomHeading,
  handleOpenMenu,
}) {
  return (
    <div className="flex flex-col gap-2 text-white hover:cursor-pointer">
      <div onClick={handleOpenMenu}>
        <div>
          <img src={image} className="w-full h-36 rounded-t-sm" />
        </div>
        <div className="bg-[#0288d1] flex flex-col items-center gap-2 py-5 px-5 rounded-b-sm">
          <p className="text-xl">{topHeading}</p>
          <p className="text-center text-sm">{topSubheading}</p>
        </div>
      </div>
      <div className="bg-[#0288d1]">
        <p className="text-center">{bottomHeading}</p>
      </div>
    </div>
  );
}

export default Enquiry;
