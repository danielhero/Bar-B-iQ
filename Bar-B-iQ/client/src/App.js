import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProvider } from "./providers/UserProvider";
import { NoteProvider } from "./providers/NoteProvider";
import { AnimalProvider } from "./providers/AnimalProvider";
import { CutProvider } from "./providers/CutProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <AnimalProvider>
          <CutProvider>
            <NoteProvider>
              <ApplicationViews />
            </NoteProvider>
          </CutProvider>
        </AnimalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
