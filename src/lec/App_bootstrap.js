import { useState } from 'react';
import './App.css'
import { vData, vData1 } from '../data.js'
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          { <Navbar.Toggle aria-controls="basic-navbar-nav" />}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* margin : 0 auto -> ml-auto mr-auto  */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">COMPANY</Nav.Link>
              <Nav.Link href="#link">PRODUCT</Nav.Link>
              <Nav.Link href="#link">BOARD</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='visualWarp mb-3' >
        <Container className='py-5 text-white text-center'>
          <h3>Lorem</h3>
          <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
        </Container>
      </div>

  
      <Container className='px-0'>
        <h3 className='text-center mb-3'>GALLERY</h3>
        <Row>
          <Col xs={6} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          </Row>
      </Container>
      
          <div className='contentWrap01'>
      <Container className='px-0'>
        <h3 className='text-center mb-3'>GALLERY</h3>
        <Row>
          <Col xs={6} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className='d-none d-md-block'>
            <Card>
              <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          </Row>
      </Container>
      
    </div>
    </div>
  );
}

export default App;
