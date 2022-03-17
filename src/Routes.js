import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";

const Routes = () => {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
