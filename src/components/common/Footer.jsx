export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-2 items-center text-white bg-gray-600 mt-16 p-5 w-full">
        <div className="flex gap-10">
          <p>
            Toll Free Number :{" "}
            <span className="text-sm text-white">1800 120 2664</span>
            <br />
            Email:{" "}
            <span className="text-sm text-white">
              abpashelpdesk@aksharags.com
            </span>
          </p>
        </div>
        <div className="w-full text-end">
          <p className="">
            T&CP Layout Approval for Bhopal,Jabalpur,Gwalior & Indore:
            <br />
            <a
              href="https://www.emptownplan.gov.in/#"
              className="text-sm text-white"
            >
              https://www.emptownplan.gov.in/#
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-white  bg-gray-800 p-1 w-auto">
        <p className="">© 2024 ABPASS 2.0 | All rights reserved.</p>
      </div>
    </div>
  );
}
