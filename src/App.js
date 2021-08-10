import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Blood from "./Components/Blood/Blood";
import BloodRegistration from "./Components/BloodRegistration/BloodRegistration";
import Footer from './Components/Footer/Footer';
import Gallery from "./Components/Gallery/Gallery";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SingleEvent from "./Components/SingleEvent/SingleEvent";
import VolunteerList from "./Components/VolunteerList/VolunteerList";

export const UserContext = createContext();

function App() {
  const [loggedInAdmin, setLoggedInAdmin] = useState(localStorage.getItem('mayaful_token'));
  return (
    <UserContext.Provider value={[loggedInAdmin, setLoggedInAdmin]}>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blood">
          <Blood />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/donor/registration">
          <BloodRegistration />
        </Route>
        <Route path="/single/event/:id">
          <SingleEvent />
        </Route>
        <PrivateRoute path="/volunteer/list/:id">
          <VolunteerList />
        </PrivateRoute>
        <PrivateRoute path="/admin/panel">
          <AdminPanel />
        </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
    </UserContext.Provider>
  );
}

export default App;
