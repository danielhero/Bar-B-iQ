import React from "react";
import { Table } from "reactstrap";

export const Doneness = ({ doneness }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Doneness Choice</th>
            <th>Approx. Cooking Time</th>
            <th>Approx. Meat Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{doneness.donenessChoice}</td>
            <td>{doneness.cookTime} minutes</td>
            <td>{doneness.temperature}°F</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
