import React from "react";
import { Table } from "reactstrap";

export const Doneness = ({ doneness }) => {
  return (
    <>
      <Table className="table" responsive="sm">
        <thead>
          <tr className="tableHeader">
            <th className="tableType">Doneness Choice</th>
            <th className="tableType">Avg. Cook Time</th>
            <th className="tableType">Avg. Meat Temp</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tableHeader">
            <td className="dropdownRender">{doneness.donenessChoice}</td>
            <td className="dropdownRender">{doneness.cookTime} minutes</td>
            <td className="dropdownRender">{doneness.temperature}°F</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
