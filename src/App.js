import "./App.css";
import FormComponent from "./components/Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TableData from "./components/Table";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FormComponent />
          </Route>
          <Route exact path="/edit/:id">
            <FormComponent />
          </Route>
          <Route exact path="/list">
            <TableData />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
