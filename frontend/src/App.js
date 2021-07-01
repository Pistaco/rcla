import Shop from "./componentes/Shop";
import Dashboard from "./componentes/Dashboard/Dashboard"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css"
import Sandbox from "./Sandbox";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/sandbox">
                    <Sandbox/>
                </Route>
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
