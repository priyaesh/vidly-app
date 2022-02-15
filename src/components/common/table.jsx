import React, { Component } from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const Table = (props) => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <div>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data}></TableBody>
      </table>
    </div>
  );
};

export default Table;
