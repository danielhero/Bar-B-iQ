import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../providers/HistoryProvider";
import { useHistory } from "react-router-dom";
import { History } from "./History";
import { Button, Modal } from "reactstrap";

export const HistoryList = () => {
  const { histories, getHistoryByUser } = useContext(HistoryContext);
  const urlHistory = useHistory();
  const userStorage = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    getHistoryByUser(userStorage.id);
  }, []);

  if (histories.length > 0) {
    return (
      <>
        <body className="historyComponent">
          <div className="historyHeader">
            <h2 className="historyName">Grill History</h2>
          </div>
          <div className="historyList">
            {histories.map((history) => (
              <History key={history.id} history={history} />
            ))}
          </div>
          <Button
            className="backButton"
            onClick={(e) => {
              urlHistory.push("/");
            }}
          >
            Back
          </Button>
        </body>
      </>
    );
  } else {
    return (
      <>
        <body className="historyComponent">
          <div className="historyHeader">
            <h2 className="historyName">Grill History</h2>
          </div>
          <div className="emptyHistoryList">
            <h2 className="emptyHistoryMessage">NO GRILLING HISTORY</h2>
          </div>
          <Button
            className="backButton"
            onClick={(e) => {
              urlHistory.push("/");
            }}
          >
            Back
          </Button>
        </body>
      </>
    );
  }
};
