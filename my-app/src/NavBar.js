import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Figure, Container, Row, Jumbotron, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import Col from 'react-bootstrap/Col'

class NavBar extends Component {
    render() {
        return (
            
                <Router>
                    <Switch>
                <Navbar bg="light">
                    <Nav>
                        <Route>
                        <Nav.Item>
                            <Nav.Link href="/home">主页</Nav.Link>
                        </Nav.Item>
                        </Route>
                        <NavDropdown title="专辑" id="nav-dropdown">
                            <NavDropdown.Item eventKey="1.1">共享知识库</NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.2">AI工具</NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.3">产业前沿</NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.4">领军人物</NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.5">同行者</NavDropdown.Item>
                            <NavDropdown.Item eventKey="1.6">其他系列</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                        <Nav.Link to="/class">分类</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/explore">探索</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/cross">交叉探索</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/promote">投稿与推广</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#find">找工作/找人才</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#project">项目对接</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#topic">话题广场</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/preview">预览</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                    
                </Switch>
                </Router>
            
                
          );
    }
  
}

export default NavBar;
