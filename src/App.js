//react imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//styles
import "./App.css";

//components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import Roadmap from "./pages/roadmap/roadmap";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/roadmap">
            <Roadmap />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
