import React from "react"
import './App.css';
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import UserRegister from "./components/UserRegister"
import UserLogin from "./components/UserLogin"
import UserProfile from "./components/UserProfile"

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="auth-wrapper">
        <Switch>
          <Route path="/register" render={() => <UserRegister />} />
          <Route path="/login" render={() => <UserLogin />} />
          <Route path="/profile" render={() => <UserProfile />} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
