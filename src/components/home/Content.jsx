import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaLightbulb } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
function Content() {
    return (
        <Container className='mb-5'>
            <h3>The Udacity Adventage</h3>
            <Row>
                <Col sx={12} md={6} className=' order-2 order-md-1 d-flex align-items-end justify-content-center justify-content-md-start'>
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                        <div className="icon">
                            <FaLightbulb style={{ color: "white", fontSize: "2em" }} />
                        </div>
                        <div>
                            <div className='text-center text-md-start'>
                                <h4>title</h4>
                                <p>Happy Happy Happy</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className='banner position-relative overflow-hidden order-1 order-md-2 '>
                    <img src='./img/img01.png' className='img0101' style={{ right: "10px", bottom: "10px" }} />
                    <img src='./img/img01.png' className='img0202' style={{ right: "10px", bottom: "10px" }} />
                </Col>
            </Row>
            <Row>


                <Col sx={12} md={6} className='order-1 order-md-2'>
                    <div className="banner  d-flex flex-column align-items-center align-items-md-start">
                        <div className="icon">
                            <FaLightbulb style={{ color: "white", fontSize: "2em" }} />
                        </div>
                        <div>
                            <div className='text-center text-md-start'>
                                <h4>title</h4>
                                <p>Happy Happy Happy</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className='order-2 order-md-1 bg-dark rounded'>2
                </Col>
            </Row>
        </Container>
    )
}
export default Content;