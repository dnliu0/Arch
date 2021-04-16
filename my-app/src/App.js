import './App.css';
import NavBar from './NavBar';
import Preview from './Preview';
import Edit from './Edit';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
function App() {
  return (
    <Router>
    <MDBContainer className="m-0 p-0" fluid>
      <NavBar />
      <Switch>
        <Route path="/preview" component={Preview} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </MDBContainer>
      
    </Router>
  );
}

export default App;
