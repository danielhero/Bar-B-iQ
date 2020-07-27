import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProvider } from "./providers/UserProvider";
import { NoteProvider } from "./providers/NoteProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <NoteProvider>
          <ApplicationViews />
        </NoteProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
