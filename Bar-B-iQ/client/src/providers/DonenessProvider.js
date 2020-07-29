import React, { useState, createContext } from "react";

export const DonenessContext = createContext();

export const DonenessProvider = (props) => {
  const [doneness, setDoneness] = useState([]);

  const getDonenessByCutId = (id) => {
    return fetch(`/api/doneness/getByCut/${id}`)
      .then((res) => res.json())
      .then(setDoneness);
  };

  return (
    <DonenessContext.Provider
      value={{
        doneness,
        setDoneness,
        getDonenessByCutId,
      }}
    >
      {props.children}
    </DonenessContext.Provider>
  );
};
