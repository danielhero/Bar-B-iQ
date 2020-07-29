import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Doneness = ({ doneness }) => {
  return (
    <>
      <Link to={`/`}>
        <Table>
          <thead>
            <tr>
              <th>Approx. Cooking Time</th>
              <th>Approx. Meat Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{doneness.cookTime} minutes</td>
              <td>{doneness.temperature}°F</td>
            </tr>
          </tbody>
        </Table>
      </Link>
    </>
  );
};
