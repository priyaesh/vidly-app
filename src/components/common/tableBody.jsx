import React, { Component } from "react";
import _ from "lodash";

class TableBody extends React.Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <div>
        <tbody>
          {data.map((item) => (
            <tr>
              {columns.map((column) => (
                <td>{this.renderCell(item, column)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

export default TableBody;
