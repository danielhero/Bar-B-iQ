import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const currentUserId = parseInt(localStorage.getItem("user"));
  return (
    <>
      <Card className="">
        <p className="">
          <Link to={`/animal`}>
            <strong>Get Grilling!</strong>
          </Link>
        </p>
      </Card>
      <Card className="">
        <p className="">
          <Link to={`/note/getByUser/`}>
            <strong>NoteBook</strong>
          </Link>
        </p>
      </Card>
      <Card className="">
        <p className="">
          <Link to={`/history`}>
            <strong>Cooking History</strong>
          </Link>
        </p>
      </Card>
    </>
  );
}
