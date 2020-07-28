import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProvider } from "./providers/UserProvider";
import { NoteProvider } from "./providers/NoteProvider";
import { AnimalProvider } from "./providers/AnimalProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <AnimalProvider>
          <NoteProvider>
            <ApplicationViews />
          </NoteProvider>
        </AnimalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
