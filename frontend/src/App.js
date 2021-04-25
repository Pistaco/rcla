import {useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios"

import Dashboard from "./componentes/Dashboard"

function App() {
    useEffect(() => axios.get("/api").then(console.log) ,[])
    return (
      <Router>
          <Switch>
              <Route path="/dashboard">
                  <Dashboard/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
