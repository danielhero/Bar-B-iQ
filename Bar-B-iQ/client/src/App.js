import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <ApplicationViews />
      </UserProvider>
    </Router>
  );
}

export default App;
