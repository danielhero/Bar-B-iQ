import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CutContext } from "../../providers/CutProvider";
import { Cut } from "./Cut";
import { Button } from "reactstrap";

export const CutList = () => {
  const { cuts, getCutsByAnimalId } = useContext(CutContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCutsByAnimalId(id);
  }, []);

  return (
    <>
      <div>
        <h2>Cut Selection</h2>
      </div>
      <div>
        {cuts.map((cut) => (
          <Cut key={cut.id} cut={cut} />
        ))}
      </div>
      <Button
        onClick={(e) => {
          history.push("/animal");
        }}
      >
        Back
      </Button>
    </>
  );
};
