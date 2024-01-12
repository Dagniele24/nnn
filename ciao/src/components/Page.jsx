import React from 'react';
import Gallery from '../components/Gallery';
import { Container, Row, Col, Carousel, Dropdown, Button } from 'react-bootstrap';

const Main = () => {
    return (
        <main>
            <div className="d-flex align-items-center">
                <h1 className="text-white">Tv Shows</h1>
                <Dropdown className="btn-group mx-3">
                    <Button variant="black" className="border-white border-2 rounded-0 text-light">
                        Genres
                    </Button>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        <Container fluid>
            <h3 className="text-white mt-4">Trending Now</h3>
            <Container fluid>
                <Row>
                    <Col className="px-0">
                        <div>
                            <Carousel.Item className="d-flex align-items-center justify-content-between">
                                <Gallery saga="bizarre adventure"/>
                            </Carousel.Item>
                            </div>
                    </Col>
                </Row>
            </Container>

            <h3 className="text-white mt-5">Watch It Again</h3>
            <Container fluid>
                <Row>
                    <Col className="px-0">
                        <div>
                            <Carousel.Item className="d-flex align-items-center justify-content-between">
                               <Gallery saga="one piece"/>
                            </Carousel.Item>
                        </div>
                    </Col>
                </Row>
            </Container>

            <h3 className="text-white mt-5">New Releases</h3>
            <Container fluid>
                <Row>
                    <Col className="px-0">
                        <div>
                            <Carousel.Item className="d-flex align-items-center justify-content-between">
                            <Gallery saga="pingu"/>
                            </Carousel.Item>
                        </div>
                    </Col>
                </Row>
            </Container>
            </Container>
        </main>
    );
};

export default Main;
