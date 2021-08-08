import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Home from "./components/Home";
import TestMap from "./components/testMap";
import Location from "./components/map";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/map" exact component={TestMap} />
        {/* <Redirect from="/" exact to="/login" /> */}
      </Switch>
    </div>
  );
}

export default App;
