import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./stylesheet.css";
class Table extends Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getKeys = function () {
    return Object.keys(this.props.data[0]);
    console.log(`headers  is`, this.props.data[0]);
  };

  handleChange(event) {
    // setChecked(event.target.checked);
    console.log(event.target);
  }
  getHeader = function () {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  getRowsData = function () {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  const handleChange = (event, no) => {
    console.log(`key is `, event.target);
    console.log(`no is`, no);
  };
  return props.keys.map((key, index) => {
    return (
      <td key={props.data[key].S} onClick={handleChange}>
        {props.data[key].S}
      </td>
    );
  });
};

export default Table;
