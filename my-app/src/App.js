// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Preview from './Preview';
import Edit from './Edit';
import { Figure, Container, Row, Jumbotron, Image, Nav } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/preview" component={Preview} />
        <Route path="/edit" component={Edit} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
