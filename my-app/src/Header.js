import React, { Component } from 'react'
import { MDBJumbotron, MDBMask, MDBRow, MDBCol, MDBCardTitle} from "mdbreact";

class Header extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0, height: '20rem'}}>
                            <MDBCol className="text-white m-0 p-0" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/standard/city/042.jpg)', height: '20rem'}} >
                                <MDBMask overlay="grey-light" style = {{ height: '20rem' }}>
                                    <div className="d-flex align-items-center" style={{ height: '20rem'}}>
                                        <MDBCol>
                                            <MDBCardTitle className="h1 h1-responsive pt-3 mx-5 font-bold" tag='p'>和作|乌镇“互联网之光”博览会主展馆的结构：弦与链</MDBCardTitle>
                                            <p className="mx-5 lead">要不要有个副标题呢</p>
                                            <hr className="mx-5 hr-light" />
                                            <p className="mx-5">要不要写封面图片来源呢</p>
                                        </MDBCol>
                                    </div>
                                </MDBMask>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </div>
          );
    }
  
}

export default Header;
