import React, { Component } from "react";

class TableHeader extends React.Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    console.log("About to sort ...", sortColumn);
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <div>
        <thead>
          <tr>
            {this.props.columns.map((column) => (
              <th
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
      </div>
    );
  }
}

export default TableHeader;
