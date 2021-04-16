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
                <div>
                <MDBNavbar color="secondary-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Design</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <Route>
                            <MDBNavItem active>
                                <MDBNavLink to="/">主页</MDBNavLink>
                            </MDBNavItem>
                        </Route>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className="d-inline">专辑</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu  className="dropdown-default">
                                    <MDBDropdownItem href="#!">共享知识库</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">AI工具</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">产业前沿</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">领军人物</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">同行者</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">其他系列</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/class">分类</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/explore">探索</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/cross">交叉探索</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/promote">投稿与推广</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/find">找工作/找人才</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/project">项目对接</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/topic">话题广场</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/preview">预览</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>  
            </div>
       
        );
    }
  
}

export default NavBar;
