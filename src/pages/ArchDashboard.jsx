import React, { useState } from 'react';
import UserCard from '../components/dashboard/UserCard';
import Dashboard from '../components/dashboard/Dashboard';
import FilesComponent from '../components/dashboard/Files';
import ProfileComponent from '../components/dashboard/Profile';

const menuData = [
    { name: "Dashboard", component: "Dashboard", subMenu: [] },
    { name: "File Statistics", component: "Statistics", subMenu: ["CVClearence", "Incomplete", "PaymentCleared", "PaymentPending", "Pending", "Rejected", "Returned", "Sanctioned", "Submitted"] },
    { name: "My Files", component: "Files", subMenu: [] },
    { name: "New Plan Submission", component: "NewPlan", subMenu: [] },
    { name: "Profile", component: "Profile", subMenu: [] },
    { name: "NOC", component: "NOC", subMenu: ["Fire NOC - Request Apply", "Fire NOC - Status", "Fire NOC - Download", "NMA Registration", "NMA Application", "NMA Request/Response", "Housing Board NOC - Apply", "Development Authority NOC - Apply", "Airport Authority NOC - Apply", "E.I.A/S.T.P NOC - Apply","High Rise Committee NOC - Apply", "Nazul NOC - Apply", "Zonal Office NOC - Apply", "Municipal Corporation NOC - Apply", "Ward Zone NOC - Apply", "Tree Cutting NOC - Apply", "Others NOC(If Any) - Apply", "New NMA NOC"] },
    { name: "Payment History", component: "PaymentHistory", subMenu: [] },
    { name: "Registration Certificate", component: "RegistrationCertificate", subMenu: [] },
    { name: "Certificate Form", component: "CertificateForm", subMenu: ["Commencement Form", "Plinth Form", "Service Form", "Completion cum Occupancy"] },
    { name: "Certificate Request", component: "CertificateRequest", subMenu: ["Plinth Certificate Request", "Service Certificate Request", "Occupency Certificate Request"] },
    { name: "Lift Completion Request", component: "LiftCompletionRequest", subMenu: [] },
];
/**
 * ArchDashboard Component
 * 
 * This component represents the main dashboard layout for the application. 
 * It includes a user card, a navigation menu with submenus, and the main dashboard content.
 */
const ArchDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const [openMenus, setOpenMenus] = useState({});
  
    // Function to render the active component based on state
    const renderComponent = () => {
      switch (activeComponent) {
        case 'Dashboard':
          return <Dashboard />;
        case 'Statistics':
          return <StatisticsComponent />;
        case 'Files':
          return <FilesComponent />;
        case 'NewPlan':
          return <NewPlanComponent />;
        case 'Profile':
          return <ProfileComponent />;
        case 'NOC':
          return <NOCComponent />;
        case 'PaymentHistory':
          return <PaymentHistoryComponent />;
        case 'RegistrationCertificate':
          return <RegistrationCertificateComponent />;
        case 'CertificateForm':
          return <CertificateFormComponent />;
        case 'CertificateRequest':
          return <CertificateRequestComponent />;
        case 'LiftCompletionRequest':
          return <LiftCompletionRequestComponent />;
        default:
          return <Dashboard />;
      }
    };
  
    // Function to handle menu click events
    const handleMenuClick = (menuItem) => {
      if (menuItem.subMenu.length > 0) {
        // Toggle submenu
        setOpenMenus((prevOpenMenus) => ({
          ...prevOpenMenus,
          [menuItem.name]: !prevOpenMenus[menuItem.name],
        }));
      } else {
        // Show component
        setActiveComponent(menuItem.component);
      }
    };
    const handleSubMenuClick = (subMenuItem) => {
        // Show component
        console.log(subMenuItem);
        // setActiveComponent(subMenuItem.component);
    };
  
    return (
      <div className="flex my-5 mx-24 bg-white">
        <div className="w-1/4 bg-[#0984e3] h-full">
            <UserCard></UserCard>
          <div className="flex flex-col">
            {menuData.map((menuItem, index) => (
              <div key={index}>
                <div
                  className="p-2 hover:bg-[#636e72] cursor-pointer flex justify-between"
                  onClick={() => handleMenuClick(menuItem)}
                >
                  <span className="text-white">{menuItem.name}</span>
                  {menuItem.subMenu.length > 0 && (
                    <span className="text-white text-2xl">{openMenus[menuItem.name] ? '-' : '+'}</span>
                  )}
                </div>
                {openMenus[menuItem.name] && (
                <div className="flex flex-col ml-4">
                  {menuItem.subMenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="p-2 hover:bg-gray-600 cursor-pointer"
                      onClick={() => handleSubMenuClick(subItem)}
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 h-full">
          {renderComponent()}
        </div>
      </div>
    );
  };
  
  export default ArchDashboard;