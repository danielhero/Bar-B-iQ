import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { NoteList } from "../components/note/NoteList";
import { AnimalList } from "../components/animal/AnimalList";
import { CutList } from "../components/cut/CutList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/animal">
          {isLoggedIn ? <AnimalList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/cut/getByAnimal/:id">
          {isLoggedIn ? <CutList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/note/getByUser">
          {isLoggedIn ? <NoteList /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
  );
}
