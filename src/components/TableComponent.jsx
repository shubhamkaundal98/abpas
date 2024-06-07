import { usePagination, useSortBy, useTable } from "react-table";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { RiPlayReverseFill, RiPlayFill } from "react-icons/ri";
import { useMemo } from "react";

export default function TableComponent({ tableData, tableColumns }) {
  console.log(tableData);

  const tabledata = useMemo(() => tableData, []);
  const tablecolumns = useMemo(() => tableColumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    { columns: tablecolumns, data: tabledata, initialState: { pageSize: 5 } },
    useSortBy,
    usePagination
  );

  return (
    <div className="border-[1px] border-slate-300 flex flex-col gap-5">
      <table className="w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th
                  className="p-4 text-left bg-[#f3f3f3] font-medium text-sm border-r-[1px] border-l-[1px] border-b-[1px] border-slate-300"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? " 🔼" : " 🔽"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr
                className="even:bg-[#f3f3f3] odd:bg-white"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td
                    className="p-4 text-center font-medium text-sm border-l-[1px] border-r-[1px] border-slate-300"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span className="ml-2">Total Items: 391</span>
      <div className="flex gap-4 ml-2 mb-2">
        <button
          className={`bg-[#f3f3f3] px-2 py-1 border-2 border-slate-300 ${
            pageIndex === 0 ? "cursor-not-allowed text-slate-500" : ""
          }`}
          disabled={pageIndex === 0}
          onClick={() => gotoPage(0)}
        >
          <IoPlaySkipBack />
        </button>
        <button
          className={`bg-[#f3f3f3] px-2 py-1 border-2 border-slate-300 ${
            !canPreviousPage ? "cursor-not-allowed text-slate-500" : ""
          }`}
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          <RiPlayReverseFill />
        </button>
        <span>
          {pageIndex + 1} / {pageCount}
        </span>
        <button
          className={`bg-[#f3f3f3] px-2 py-1 border-2 border-slate-300 ${
            !canNextPage ? "cursor-not-allowed text-slate-500" : ""
          }`}
          disabled={!canNextPage}
          onClick={nextPage}
        >
          <RiPlayFill />
        </button>
        <button
          className={`bg-[#f3f3f3] px-2 py-1 border-2 border-slate-300 ${
            pageIndex >= pageCount - 1
              ? "cursor-not-allowed text-slate-500"
              : ""
          }`}
          disabled={pageIndex >= pageCount - 1}
          onClick={() => gotoPage(pageCount - 1)}
        >
          <IoPlaySkipForward />
        </button>
      </div>
    </div>
  );
}
