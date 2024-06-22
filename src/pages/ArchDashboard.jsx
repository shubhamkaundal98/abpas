import React, { useState } from 'react';
import UserCard from '../components/dashboard/UserCard';
import Dashboard from '../components/dashboard/Dashboard';

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

/**
 * ArchDashboard Component
 * 
 * This component represents the main dashboard layout for the application. 
 * It includes a user card, a navigation menu with submenus, and the main dashboard content.
 */
const ArchDashboard = () => {
  const [openMenus, setOpenMenus] = useState({});

  /**
   * Toggle the visibility of a submenu.
   * 
   * @param {string} menu - The name of the menu to toggle.
   */
  const toggleSubMenu = (menu) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menu]: !prevOpenMenus[menu],
    }));
  };

  return (
    <div className="flex my-5 mx-24 bg-white">
      {/* Left Column: User Card and Navigation Menu */}
      <div className="w-1/4 bg-[#2883dd] h-full">
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
                  <span className='text-white'>{menuName}</span>
                  {subMenu.length > 0 && (
                    <span className="text-white text-2xl">{isOpen ? '-' : '+'}</span>
                  )}
                </div>
                {isOpen && (
                  <div className="flex flex-col ml-4">
                    {subMenu.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="p-2 hover:bg-gray-600 cursor-pointer"
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
        {/* Content for the first column (3/12 or 1/4 of the width) */}
      </div>
      
      {/* Right Column: Main Dashboard Content */}
      <div className="w-3/4 h-full">
        <Dashboard />
        {/* Content for the second column (9/12 or 3/4 of the width) */}
      </div>
    </div>
  );
};

export default ArchDashboard;
