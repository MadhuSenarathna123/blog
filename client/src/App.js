import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Map from "./pages/map/Map";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
    <TopBar/>
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register"> {user ? <Home/> : <Register />} </Route>

      <Route path="/login"> {user ? <Home/> : <Login />} </Route>

      <Route path="/write">{user ? <Write/> : <Register />} </Route>
      
      <Route path="/settings"> {user ? <Settings/> : <Register />} </Route>

      <Route path="/map" >{user ? <Map/> : <Register />}</Route>

      <Route path="/post/:postId">
        <Single />
      </Route>

    </Switch>
    </Router>
  );
}

export default App;
