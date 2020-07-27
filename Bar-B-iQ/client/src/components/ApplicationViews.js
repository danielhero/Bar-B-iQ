import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import Login from "./Login";
import Hello from "./Home";
import Register from "./Register";
import { NoteList } from "../components/note/NoteList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/note">
          {isLoggedIn ? <NoteList /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
  );
}
