import React, { useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import UserCard from '../components/dashboard/UserCard';

const menuData = [
  { "Home": [] },
  { "File Statistics": ["Resubmit", "Precheck Failed"] },
  { "My Files": [] },
  { "New Plan Submission": [] },
  { "Profile": [] },
  { "NOC": ["Resubmit", "Precheck Failed"] },
  { "Payment History": [] },
  { "Registration Certificate": [] },
  { "Certificate Form": ["Resubmit", "Precheck Failed"] },
  { "Certificate Request": ["Resubmit", "Precheck Failed"] },
  { "Lift Completion Request": [] },
];

const messages = [{ Message: "This is a test message" }];
const statisticsTableData = [
  { StatusDisplayName: "Status 1", StatusId: 1, Count: 10 },
  { StatusDisplayName: "Status 2", StatusId: 2, Count: 20 },
];
const archAllCount = 100;
const archIncompleteCount = 50;
const archSubmittedAll = 30;
const archInprocessCount = 20;
const archRejectedCount = 10;
const archReturnCount = 5;
const archSanctionedCount = 3;
const archDemandNote = 2;
const archPaymentClearncecount = 1;

const ArchDashboard = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (menu) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menu]: !prevOpenMenus[menu],
    }));
  };

  return (
    <div className="flex my-5 mx-24 bg-white">
      <div className="w-1/4 bg-[#74b9ff] h-full">
        <UserCard />
        <div className="flex flex-col">
          {menuData.map((item, index) => {
            const menuName = Object.keys(item)[0];
            const subMenu = item[menuName];
            const isOpen = openMenus[menuName];

            return (
              <div key={index}>
                <div
                  className="p-2 hover:bg-[#b2bec3] cursor-pointer flex justify-between"
                  onClick={() => subMenu.length && toggleSubMenu(menuName)}
                >
                  <span className="text-white">{menuName}</span>
                  {subMenu.length > 0 && (
                    <span className="text-white text-2xl">{isOpen ? '-' : '+'}</span>
                  )}
                </div>
                {isOpen && (
                  <div className="flex flex-col ml-4">
                    {subMenu.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="p-2 hover:bg-gray-600 cursor-pointer text-white"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-3/4 h-full">
        <Dashboard
          messages={messages}
          statisticsTableData={statisticsTableData}
          archAllCount={archAllCount}
          archIncompleteCount={archIncompleteCount}
          archSubmittedAll={archSubmittedAll}
          archInprocessCount={archInprocessCount}
          archRejectedCount={archRejectedCount}
          archReturnCount={archReturnCount}
          archSanctionedCount={archSanctionedCount}
          archDemandNote={archDemandNote}
          archPaymentClearncecount={archPaymentClearncecount}
        />
      </div>
    </div>
  );
};

export default ArchDashboard;
