import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Figure, Container, Row, Jumbotron, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
//import Col from 'react-bootstrap/Col'

class NavBar extends Component {
    state = {
        isOpen: false
    };
      
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <Router>
                <Switch>
                <MDBNavbar color="#f50057 pink accent-3" dark expand="md">
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <   MDBNavbarNav left>
                        <Route>
                        <MDBNavItem active>
                            <Nav.Link href="/home">主页</Nav.Link>
                        </MDBNavItem>
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
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                    
                </Switch>
                </Router>
            
                
          );
    }
  
}

export default NavBar;
