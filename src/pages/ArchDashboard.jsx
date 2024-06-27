import React, { useState } from 'react';
import UserCard from '../components/dashboard/UserCard';
import Dashboard from '../components/dashboard/Dashboard';
import FilesComponent from '../components/dashboard/Files';
import ProfileComponent from '../components/dashboard/Profile';
// import StatisticsComponent from '../components/dashboard/Statistics';
// import NewPlanComponent from '../components/dashboard/NewPlan';
// import NOCComponent from '../components/dashboard/NOC';
// import PaymentHistoryComponent from '../components/dashboard/PaymentHistory';
// import RegistrationCertificateComponent from '../components/dashboard/RegistrationCertificate';
// import CertificateFormComponent from '../components/dashboard/CertificateForm';
// import CertificateRequestComponent from '../components/dashboard/CertificateRequest';
// import LiftCompletionRequestComponent from '../components/dashboard/LiftCompletionRequest';
// import ChildComponent from '../components/dashboard/ChildComponent';

const menuData = [
    { name: "Home", component: "Dashboard", StatusDisplayName: "", StatusId: "", subMenu: [] },
    {
        name: "File Statistics", StatusDisplayName: "", StatusId: "", component: "Statistics",
        subMenu: [
            { title: "Colony Verification Clearance Files", StatusId: "178", name: "CVClearance" },
            { title: "Incomplete Files", StatusId: "39", name: "Incomplete" },
            { title: "Payment Cleared Files", StatusId: "53", name: "PaymentCleared" },
            { title: "Payment Pending Files", StatusId: "51", name: "PaymentPending" },
            { title: "Pending Files", StatusId: "33", name: "Pending" },
            { title: "Rejected Files", StatusId: "36", name: "Rejected" },
            { title: "Returned Files", StatusId: "37", name: "Returned" },
            { title: "Sanctioned Files", StatusId: "38", name: "Sanctioned" },
            { title: "Submitted Files", StatusId: "35", name: "Submitted" },
        ]
    },
    { name: "My Files", StatusDisplayName: "", StatusId: "", component: "Files", subMenu: [] },
    { name: "New Plan Submission", StatusDisplayName: "", StatusId: "", component: "NewPlan", subMenu: [] },
    { name: "Profile", StatusDisplayName: "", StatusId: "", component: "Profile", subMenu: [] },
    {
        name: "NOC", StatusDisplayName: "", StatusId: "", component: "NOC",
        subMenu: [
            { title: "Fire NOC - Request Apply", name: "FireNOCRequestApply" },
            { title: "Fire NOC - Status", name: "FireNOCStatus" },
            { title: "Fire NOC - Download", name: "FireNOCDownload" },
            { title: "NMA Registration", name: "NMARegistration" },
            { title: "NMA Application", name: "NMAApplication" },
            { title: "NMA Request/Response", name: "NMARequestResponse" },
            { title: "Housing Board NOC - Apply", name: "HousingBoardNOCApply" },
            { title: "Development Authority NOC - Apply", name: "DevelopmentAuthorityNOCApply" },
            { title: "Airport Authority NOC - Apply", name: "AirportAuthorityNOCApply" },
            { title: "E.I.A/S.T.P NOC - Apply", name: "EIASTPNOCApply" },
            { title: "High Rise Committee NOC - Apply", name: "HighRiseCommitteeNOCApply" },
            { title: "Nazul NOC - Apply", name: "NazulNOCApply" },
            { title: "Zonal Office NOC - Apply", name: "ZonalOfficeNOCApply" },
            { title: "Municipal Corporation NOC - Apply", name: "MunicipalCorporationNOCApply" },
            { title: "Ward Zone NOC - Apply", name: "WardZoneNOCApply" },
            { title: "Tree Cutting NOC - Apply", name: "TreeCuttingNOCApply" },
            { title: "Others NOC (If Any) - Apply", name: "OthersNOCApply" },
            { title: "New NMA NOC", name: "NewNMANOC" },
        ]
    },
    { name: "Payment History", StatusDisplayName: "", StatusId: "", component: "PaymentHistory", subMenu: [] },
    { name: "Registration Certificate", StatusDisplayName: "", StatusId: "", component: "RegistrationCertificate", subMenu: [] },
    {
        name: "Certificate Form", StatusDisplayName: "", StatusId: "", component: "CertificateForm",
        subMenu: [
            { title: "Commencement Form", name: "CommencementForm" },
            { title: "Plinth Form", name: "PlinthForm" },
            { title: "Service Form", name: "ServiceForm" },
            { title: "Completion cum Occupancy", name: "CompletionCumOccupancy" },
        ]
    },
    {
        name: "Certificate Request", StatusDisplayName: "", StatusId: "", component: "CertificateRequest",
        subMenu: [
            { title: "Plinth Certificate Request", name: "PlinthCertificateRequest" },
            { title: "Service Certificate Request", name: "ServiceCertificateRequest" },
            { title: "Occupancy Certificate Request", name: "OccupancyCertificateRequest" },
        ]
    },
    { name: "Lift Completion Request", component: "LiftCompletionRequest", subMenu: [] },
];

const ArchDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const [subMenuItem, setSubMenuItem] = useState(null);
    const [openMenus, setOpenMenus] = useState({});

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <Dashboard />;
            // case 'Statistics':
            //     return <StatisticsComponent />;
            case 'Files':
                return <FilesComponent />;
            // case 'NewPlan':
            //     return <NewPlanComponent />;
            case 'Profile':
                return <ProfileComponent />;
            // case 'NOC':
            //     return <NOCComponent />;
            // case 'PaymentHistory':
            //     return <PaymentHistoryComponent />;
            // case 'RegistrationCertificate':
            //     return <RegistrationCertificateComponent />;
            // case 'CertificateForm':
            //     return <CertificateFormComponent />;
            // case 'CertificateRequest':
            //     return <CertificateRequestComponent />;
            // case 'LiftCompletionRequest':
            //     return <LiftCompletionRequestComponent />;
            case 'fileStatus':
                return <FilesComponent status={subMenuItem} />;
            default:
                return <Dashboard />;
        }
    };

    const handleMenuClick = (menuItem) => {
        if (menuItem.subMenu.length > 0) {
            setOpenMenus((prevOpenMenus) => ({
                ...prevOpenMenus,
                [menuItem.name]: !prevOpenMenus[menuItem.name],
            }));
        } else {
            setActiveComponent(menuItem.component);
        }
    };

    const handleSubMenuClick = (subMenuItem) => {
        setActiveComponent('fileStatus');
        setSubMenuItem(subMenuItem);
    };

    return (
        <div className="flex my-5 mx-24 bg-white">
            <div className="w-1/4 bg-[#0984e3] h-full">
                <UserCard />
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
                                            {subItem.title}
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
