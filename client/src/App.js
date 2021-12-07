import React,{useEffect} from "react"
import './App.css';
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import UserRegister from "./components/UserRegister"
import UserLogin from "./components/UserLogin"
import UserProfile from "./components/UserProfile"
import {useDispatch, useSelector} from "react-redux"
import { getProfile } from "./JS/actions/userAction";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)

  useEffect(() => {
   dispatch(getProfile())
  }, [isAuth])


  return (
    <div className="App">
      <NavBar />

      <div className="auth-wrapper">
        <Switch>
          <Route path="/register" render={() => <UserRegister />} />
          <Route path="/login" render={() => <UserLogin />} />
          {/* <Route path="/profile" component={<UserProfile />} /> */}
          <PrivateRoute path="/profile" render={()=><UserProfile />} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
