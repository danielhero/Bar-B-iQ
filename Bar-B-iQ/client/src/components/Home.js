import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <body className="homePage">
        <Card className="">
          <p className="">
            <Link to={`/animal`}>
              <strong>Get Grilling!</strong>
            </Link>
          </p>
        </Card>
        <Card className="">
          <p className="">
            <Link to={`/note/getByUser`}>
              <strong>Your GrillBook</strong>
            </Link>
          </p>
        </Card>
        <Card className="">
          <p className="">
            <Link to={`/history/getByUser`}>
              <strong>Grilling History</strong>
            </Link>
          </p>
        </Card>
      </body>
    </>
  );
}
