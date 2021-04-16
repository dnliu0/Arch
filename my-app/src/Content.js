import React, { Component } from 'react'
import { MDBJumbotron, MDBBtn, MDBTypography, MDBBox, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

class Content extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol>
                        <div className="mx-5">
                        <MDBCol className="text-center">
                            <MDBBox className="h5">
                                <MDBTypography tag='p'>
                                    结构设计的限制条件
                                </MDBTypography>
                            </MDBBox>
                            <MDBBox className="h5">
                                <MDBTypography tag='p'>
                                    Initial constraints of structural design   
                                </MDBTypography>
                            </MDBBox>
                        </MDBCol>
                        <MDBCol>
                            <MDBBox tag='p'>本次介绍的项目位于乌镇核心镇区的西北角，整个场地被农宅、旅游项目以及已建成的一期展馆所包围。整个片区紧邻乌镇西栅古建筑群，在区域城镇化发展进程中，新老区域建筑交织，呈现出复杂的多样性。项目建成后作为2019世界互联网大会的新场馆。</MDBBox>
                            <MDBBox tag='p'>The project is located in the northwest corner of Wuzhen's core town area. The entire site is surrounded by farm houses, tourism projects and the first-phase exhibition hall that has been completed.  The whole area sit close to the ancient buildings of Xizha in Wuzhen. In the process of regional urbanization, new and old regional buildings are influencing each other, emerging a complex diversity. The project will serve as a new venue for the 2019 World Internet Conference right after it is completed.</MDBBox>
                            <br />
                        </MDBCol>
                        <MDBCol>
                            <MDBBox tag='p'>本次介绍的项目位于乌镇核心镇区的西北角，整个场地被农宅、旅游项目以及已建成的一期展馆所包围。整个片区紧邻乌镇西栅古建筑群，在区域城镇化发展进程中，新老区域建筑交织，呈现出复杂的多样性。项目建成后作为2019世界互联网大会的新场馆。</MDBBox>
                            <MDBBox tag='p'>The project is located in the northwest corner of Wuzhen's core town area. The entire site is surrounded by farm houses, tourism projects and the first-phase exhibition hall that has been completed.  The whole area sit close to the ancient buildings of Xizha in Wuzhen. In the process of regional urbanization, new and old regional buildings are influencing each other, emerging a complex diversity. The project will serve as a new venue for the 2019 World Internet Conference right after it is completed.</MDBBox>
                            <br />
                        </MDBCol>
                        <MDBCol>
                        <MDBCol style={{ width: '100vw'}} className="d-flex justify-content-center">
                        <figure className="figure">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg" className="figure-img img-fluid z-depth-1"
                                alt="" style={{width: '400px'}} />
                            <figcaption className="figure-caption d-flex justify-content-center">
                                文字文字
                            </figcaption>
                            <figcaption className="figure-caption d-flex justify-content-center">
                                A caption for the above image.
                            </figcaption>
                            </figure>
                        </MDBCol>
                        </MDBCol>
                            </div>
                        <hr className="mx-5" />
                        <MDBRow className="mx-5">
                            <MDBCol>相关链接</MDBCol>
                            <br />
                        </MDBRow>
                        <MDBRow className="mx-5">
                            <MDBCol>http://localhost:3000/preview</MDBCol>
                            <br />
                        </MDBRow>
                        <MDBRow className="mx-5">
                            <MDBCol>http://localhost:3000/preview</MDBCol>
                            <br />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
          );
    }
  
}

export default Content;
