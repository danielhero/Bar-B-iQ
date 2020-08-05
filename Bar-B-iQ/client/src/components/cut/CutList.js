import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CutContext } from "../../providers/CutProvider";
import { Cut } from "./Cut";
import { Button } from "reactstrap";
import "./Cut.css";

export const CutList = () => {
  const { cuts, getCutsByAnimalId } = useContext(CutContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCutsByAnimalId(id);
  }, []);

  return (
    <>
      <article className="cutPage">
        <div>
          <h2 className="cutHeader">Cut Selection</h2>
        </div>
        <div>
          {cuts.map((cut) => (
            <Cut key={cut.id} cut={cut} />
          ))}
        </div>
        <div className="backButton">
          <Button
            size="lg"
            onClick={(e) => {
              history.push("/animal");
            }}
          >
            Back
          </Button>
        </div>
      </article>
    </>
  );
};
