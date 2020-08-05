import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "./logo.png";

export default function Home() {
  return (
    <>
      <article className="homePage">
        <div className="homePageImgDiv">
          <img className="logoImg" src={Logo} alt="website logo" />
        </div>
        <div className="homePageLinks">
          <p className="homePageLink">
            <Link className="eachLink" to={`/animal`}>
              Get Grilling!
            </Link>
          </p>

          <p className="homePageLink">
            <Link className="eachLink" to={`/note/getByUser`}>
              Your GrillBook
            </Link>
          </p>

          <p className="homePageLink">
            <Link className="eachLink" to={`/history/getByUser`}>
              Grilling History
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
