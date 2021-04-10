import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Figure, Container, Row, Col, Jumbotron, Image, Nav, Card, Button } from 'react-bootstrap'
import './Preview.css';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
//import Col from 'react-bootstrap/Col'

class Preview extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="hero" fluid>
                        <Container>
                            <h1>Fuster住宅，西班牙 / Arqbag</h1>
                            <p>历史建筑的更新与再生</p>
                        </Container>
                </Jumbotron>
                
                    <Container fluid>
                        <Card className="info">
                            <Card.Body>
                                <Card.Title>基本说明</Card.Title>
                                <Row>
                                    <Col xs lg="2"><Card.Text>设计公司：</Card.Text></Col>
                                    <Col xs lg="4"><Card.Link href="#">GWP Architects</Card.Link></Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2"><Card.Text>位置：</Card.Text></Col>
                                    <Col xs lg="4"><Card.Link href="#">西班牙</Card.Link></Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2"><Card.Text>类型：</Card.Text></Col>
                                    <Col xs lg="4"><Card.Link href="#">建筑</Card.Link></Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2"><Card.Text>材料：</Card.Text></Col>
                                    <Col xs lg="4"><Card.Link href="#">木材</Card.Link></Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2"><Card.Text>标签：</Card.Text></Col>
                                    <Col xs lg="4"><Card.Link href="#">木材</Card.Link></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Container>
                        
                        
                    <Container className = "content" fluid>
                        <Row className = "title">
                            <h5>建筑大师云集的全球总部集聚区</h5>
                        </Row>
                        <Row className = "title">
                            <h5>Agglomeration of Global Headquarters and Architectural Masterpieces</h5>
                        </Row>
                        
                        <Row className = "more">
                            <p class = "text-justify">三七互娱全球总部大厦项目位于广州琶洲核心商务区，琶洲区位优势明显，与珠江新城、广州国际金融城隔江相望，构成广州中心城区经济发展“黄金铁三角”，未来将成为广州创新经济发展核心引擎。目前该区域已经成功引入阿里巴巴、腾讯、三七互娱、南方复星、唯品会、国美、小米、YY、科大讯飞等一大批人工智能与数字经济的龙头企业，并着力推进打造世界一流的数字经济示范区。</p>
                        </Row>
                        <Row className = "more">
                            <p class = "text-justify">37 Interactive Entertainment Global Headquarters sits right at the heart of Pazhou CBD in Guangzhou City, a prestigious location with obvious advantage: Zhujiang New Town and Guangzhou International Finance Center are across the river, forming the “Gold Triangle” of economic development at the central area of Guangzhou and becoming the new engine for creativity and growth of the city in the near future. The district has successfully invited numerous leading enterprises in artificial intelligence and digital economy including Alibaba, Tencent, 37 Interactive Entertainment, Fosun (South China), VIP.com, Gome Retail, Xiaomi, YY.com, iFLYTEK, etc to settle in, and are dedicated to building a world class demonstration area of digital economy.</p>
                        </Row>
                        <Row className = "more-image">
                        <img src="logo512.png"></img>
                        </Row>
                        <Row className = "more">
                            <p class = "text-justify">三七互娱全球总部大厦项目位于广州琶洲核心商务区，琶洲区位优势明显，与珠江新城、广州国际金融城隔江相望，构成广州中心城区经济发展“黄金铁三角”，未来将成为广州创新经济发展核心引擎。目前该区域已经成功引入阿里巴巴、腾讯、三七互娱、南方复星、唯品会、国美、小米、YY、科大讯飞等一大批人工智能与数字经济的龙头企业，并着力推进打造世界一流的数字经济示范区。</p>
                        </Row>
                        <Row className = "more">
                            <p class = "text-justify">37 Interactive Entertainment Global Headquarters sits right at the heart of Pazhou CBD in Guangzhou City, a prestigious location with obvious advantage: Zhujiang New Town and Guangzhou International Finance Center are across the river, forming the “Gold Triangle” of economic development at the central area of Guangzhou and becoming the new engine for creativity and growth of the city in the near future. The district has successfully invited numerous leading enterprises in artificial intelligence and digital economy including Alibaba, Tencent, 37 Interactive Entertainment, Fosun (South China), VIP.com, Gome Retail, Xiaomi, YY.com, iFLYTEK, etc to settle in, and are dedicated to building a world class demonstration area of digital economy.</p>
                        </Row>
                        <Row className = "more">
                            <p class = "text-justify">三七互娱全球总部大厦项目位于广州琶洲核心商务区，琶洲区位优势明显，与珠江新城、广州国际金融城隔江相望，构成广州中心城区经济发展“黄金铁三角”，未来将成为广州创新经济发展核心引擎。目前该区域已经成功引入阿里巴巴、腾讯、三七互娱、南方复星、唯品会、国美、小米、YY、科大讯飞等一大批人工智能与数字经济的龙头企业，并着力推进打造世界一流的数字经济示范区。</p>
                        </Row>
                        <Row className = "more-image">
                        <img src="logo512.png"></img>
                        </Row>
                        <Row className = "more">
                            <p class = "text-justify">37 Interactive Entertainment Global Headquarters sits right at the heart of Pazhou CBD in Guangzhou City, a prestigious location with obvious advantage: Zhujiang New Town and Guangzhou International Finance Center are across the river, forming the “Gold Triangle” of economic development at the central area of Guangzhou and becoming the new engine for creativity and growth of the city in the near future. The district has successfully invited numerous leading enterprises in artificial intelligence and digital economy including Alibaba, Tencent, 37 Interactive Entertainment, Fosun (South China), VIP.com, Gome Retail, Xiaomi, YY.com, iFLYTEK, etc to settle in, and are dedicated to building a world class demonstration area of digital economy.</p>
                        </Row>
                    </Container>
                     
                    <Container className="d-flex justify-content-center">
                    <Link to="/edit">
                        <Button className="edit-btn" variant="light" component={Link} to="/edit">编辑</Button>
                    </Link>
                    </Container>
                    
            </div>
          );
    }
  
}

export default Preview;
