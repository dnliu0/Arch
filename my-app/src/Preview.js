import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Figure, Container, Row, Col, Jumbotron, Image, Nav, Card, Button } from 'react-bootstrap'
import './Preview.css';
import Header from './Header';
import Detail from './Detail';
import Content from './Content';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBMask, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
//import Col from 'react-bootstrap/Col'

class Preview extends Component {
    render() {
        return (
            <div>
                <Header />            
                <Detail />
                <Content />
            </div>
          );
    }
  
}

export default Preview;
