import {useEffect} from "react"
import Shop from "./componentes/Shop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios"

import Dashboard from "./componentes/Dashboard/Dashboard"

function App() {
    return (
      <Router>
          <Switch>
              <Route path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/">
                  <Shop/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
