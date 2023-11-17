import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaFacebook } from "react-icons/fa";
function Footer() {
    return (
        <div style={{ background: "#ddd" }} className='py-5'>
            <Container className='mb-5'>
                <Row>
                    <Col md={6}></Col>
                    <ul className='d-flex  justify-content-center  justify-content-md-start'>
                        <li><a href="#!">Privacy</a></li>
                        <li className='px-3'>/</li>
                        <li><a href="#!">Team</a></li>
                        <li className='px-3'>/</li>
                        <li><a href="#!">Sitemap</a></li>
                    </ul>
                    <Col md={6} className='d-flex justify-content-md-end  justify-content-center'>
                        <ul className='d-flex gap-2'>
                            <li><FaGithub /> </li>
                            <li><FaFacebook /></li>
                            <li><FaGithub /> </li>
                            <li><FaFacebook /></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center text-md-start px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, iure.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid cupiditate ex doloribus ut.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Footer;