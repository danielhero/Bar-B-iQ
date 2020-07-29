import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProvider } from "./providers/UserProvider";
import { NoteProvider } from "./providers/NoteProvider";
import { AnimalProvider } from "./providers/AnimalProvider";
import { CutProvider } from "./providers/CutProvider";
import { DonenessProvider } from "./providers/DonenessProvider";

function App() {
  return (
    <Router>
      <UserProvider>
        <AnimalProvider>
          <CutProvider>
            <DonenessProvider>
              <NoteProvider>
                <ApplicationViews />
              </NoteProvider>
            </DonenessProvider>
          </CutProvider>
        </AnimalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
