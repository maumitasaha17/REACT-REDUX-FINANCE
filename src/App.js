import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Finance from "./components/finance";
import FinanceDetails from "./components/financeDetails";
//import FinanceDetails from "./components/financeDetails";
//import AddFinance from "./components/addFinance";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/finance" component={Finance} />
            <Route path="/financeDetails" component={FinanceDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
