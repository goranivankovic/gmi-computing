import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel } from 'react-bootstrap';
import{Link } from 'react-router-dom'
import laptop2 from '../img/laptop2.jpg'

export default class ImageTextCol extends Component {
    render() {
        return (
            <div>
                <Container fluid className="imgAndTextMain">
                    <Row>
                        <Col className="col-md-6 col-12 imageAndTextColona">
                            <img src={laptop2}  />

                        </Col>
                        <Col className="col-md-6 col-12 imageAndTextColona">
                            <h2 className="text-center text-primary l"><span className="text-dark navBrend">gmi-computing </span></h2>

                            <p>
                            <br></br>
                            <br></br>
                  Mi smo mali tim sa velikim snovima, zelimo da stvorimo najbolje i najkreativnije sajtove.<br></br>
                    Nas kavaliteti su:<br></br>
                    1.Rad sa najnovijim tehnologijama.<br></br>
                    2.Iskusan tim sa velikim iskustvom.<br></br>
                    3.Preko 20000 linija coda.<br></br>
                    4.Zelja za napretkom i izradom najkretivnijih sajtovima.<br></br>
                    5.Jedinstvenost.<br></br>
                    6.Kreativnost.<br></br>




                            </p>
                         </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
