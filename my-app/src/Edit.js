import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBBtn, MDBIco, MDBCard, MDBCardBody } from 'mdbreact';

import { Figure, Container, Row, Col, Jumbotron, Nav, Card, Button } from 'react-bootstrap'
import './Preview.css';
class Edit extends Component {
    constructor() {
        super();
        this.state = {
            bg_pic: null,
            title: '',
            sub_title: '',
            content_title: '',
            content_text: '',
            content_text_pic: '',
            saved: false,
        };

    }
    render() {
        return (
            <MDBContainer className="edit-form">
                <MDBRow center>
                    <MDBCol md="10">
                        <MDBCard>
                            <MDBCardBody>
                                <p className="h4 text-center mb-4">标题信息</p>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">标题</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">副标题</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">背景图片</label>
                                <div className="input-group">
                                <div className="custom-file">
                                    <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose file
                                    </label>
                                </div>
                                </div>
                                <br />
                            
                                <p className="h4 text-center mb-4">基本说明信息</p>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">设计公司</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">位置</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">类型</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">材料</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">标签</label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                        
                                <p className="h4 text-center mb-4">内容</p>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">文字</label>
                                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">图片</label>
                                <div className="input-group">
                                <div className="custom-file">
                                    <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose file
                                    </label>
                                </div>
                                </div>
                                <div className="d-flex justify-content-end edit-form"><MDBIcon icon="plus"/></div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )}};
export default Edit;