import React from "react";
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import MainPage from "./containers/MainPage/MainPage";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import CustomAppBar from "./components/UI/CustomAppBar/CustomAppBar";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import AddPhoto from "./containers/AddPhoto/AddPhoto";

function App() {
  const user = useSelector(state => state.users.user);
  const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
      <Route {...props}/> :
      <Redirect to={redirectTo}/>
  };
  return (
    <>
      <CustomAppBar/>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/profile/:id' component={ProfilePage}/>

        <ProtectedRoute
          path='/add'
          component={AddPhoto}
          isAllowed={user._id}
          redirectTo='/login'
        />

      </Switch>
    </>
  );
}

export default App;
