// src/Dashboard.js
import React, { useState } from 'react';

const messages = [{ Message: "This is a test message" }];
const statisticsTableData = [
  { StatusDisplayName: "Status 1", StatusId: 1, Count: 10 },
  { StatusDisplayName: "Status 2", StatusId: 2, Count: 20 },
];
const archAllCount = 715;
const archIncompleteCount = 189;
const archSubmittedAll = 526;
const archInprocessCount = 1051;
const archRejectedCount = 16;
const archReturnCount = 201;
const archSanctionedCount = 120;
const archDemandNote = 26;
const archPaymentClearncecount = 10;

const Dashboard = () => {

  return (
    <div className="w-full">
        <div className="text-left font-bold bg-white text-black p-4 border-b-2 border-black" id="FileStats">
            <h1 className="text-[#2883dd] font-bold text-xl">Dashboard</h1>
        </div>
      <div className="text-center font-bold bg-white text-black p-4" id="FileStats">
        <h3 className="text-black font-bold text-2xl">FILE STATISTICS</h3>
      </div>

      <table className="w-11/12 mx-auto shadow-md hidden border-2" id="dashboardListTable">
        <thead>
          <tr className="bg-[#2883dd] text-white text-center">
            <th className="border border-black border-solid" >Total No.of Files</th>
            {statisticsTableData.map((data, index) => (
              <th className="border border-black border-solid" key={index}>{data.StatusDisplayName}</th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          <tr className="text-center">
            <td className="border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', '')}>{archAllCount}</a></td>
            {statisticsTableData.map((data, index) => (
              <td className="border border-black border-solid" key={index}><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', data.StatusId, data.StatusDisplayName)}>{data.Count}</a></td>
            ))}
          </tr>
        </tbody>
      </table>
      <table className="w-11/12 mx-auto shadow-md text-sm mt-4">
        <thead>
          <tr className="bg-[#2883dd] text-white text-center">
            <td className="border border-black border-solid" colSpan="1">Total<br />no.of Files</td>
            <td className="border border-black border-solid" colSpan="6">Files</td>
            <td className="border border-black border-solid" colSpan="6">Payment Information</td>
          </tr>
          <tr className="bg-[#707679] text-white text-center">
            <td className="border border-black border-solid">TOTAL<br />(T = D+S)</td>
            <td className="border border-black border-solid">Draft<br />(D)</td>
            <td className="border border-black border-solid">Submitted<br />(S= P+RJ+RT+A)</td>
            <td className="border border-black border-solid">Pending<br />Submitted<br />(P)</td>
            <td className="border border-black border-solid">Rejected<br />(RJ)</td>
            <td className="border border-black border-solid">Returned<br />(RT)</td>
            <td className="border border-black border-solid">Approved<br />(A)</td>
            <td className="border border-black border-solid">Demand<br />Note generated<br />(DN)</td>
            <td className="border border-black border-solid">Payment Pending from<br />architect<br />Demand Note<br />(PA)</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center h-8">
            <td className="text-blue-500 cursor-pointer border border-black border-solid"><a onClick={() => console.log('showMyfiles', -17, 'Total')}>{archAllCount}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', 39, 'In-complete')}>{archIncompleteCount}</a></td>
            <td className="w-1/12 border border-black border-solid" ><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', -14, 'Submitted')}>{archSubmittedAll}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', -16, 'Pending')}>{archInprocessCount}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', 36, 'Rejected')}>{archRejectedCount}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', 37, 'Returned')}>{archReturnCount}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', 38, 'Sanctioned')}>{archSanctionedCount}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', -15, 'DemandNote')}>{archDemandNote}</a></td>
            <td className="w-1/12 border border-black border-solid"><a className="text-blue-500 cursor-pointer" onClick={() => console.log('showMyfiles', 52, 'InPaymentClearence')}>{archPaymentClearncecount}</a></td>
          </tr>
        </tbody>
        </table>

    </div>
  );
};

export default Dashboard;
