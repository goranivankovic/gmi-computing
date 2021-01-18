import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel,Card } from 'react-bootstrap';
import{Link } from 'react-router-dom'
import htmlImage from '../img/html.jpg'
import cssImage from '../img/css.jpg'
import jsImage from '../img/js.jpg'
import reactImage from '../img/react.jpg'

export default class ThreeImages extends Component {
    constructor(props){
        super(props)
        this.scaleTo92=this.scaleTo92.bind(this)
        this.scaleTo100=this.scaleTo100.bind(this)
    }
    scaleTo92(t){
        t.target.style.transition='1200ms'
        t.target.style.transform=`scale(0.92)`;

   
        
    }
    scaleTo100(b){
        b.target.style.transition='1200ms'
        b.target.style.transform=`scale(1)`;

   
        
    }

    render() {
        return (
            <div>
                <Container className="threeImages">
                <h2 className="text-center text-secondary">Tehnologije koje koristimo</h2>
                    <Row className="threeImaseRed">
                        
                        <Col className="col-md-5 col-10" onMouseOver={this.scaleTo92} onMouseOut={this.scaleTo100}>
                        <br></br>
                        <Card className="carta">
                            <img src ={htmlImage} />
                            <Card.Body>
                            <Card.Title className="text-center text-secondary">HTML</Card.Title>


                            </Card.Body>

                        </Card>

                        </Col>
                        <Col className="col-md-5 col-10" onMouseOver={this.scaleTo92} onMouseOut={this.scaleTo100}>
                        <br></br>
                        <Card className="carta">
                            <img src ={cssImage} />
                            <Card.Body>
                            <Card.Title className="text-center text-secondary">CSS</Card.Title>


                            </Card.Body>

                        </Card>

                        </Col>
                     
                        <Col className="col-md-5 col-10" onMouseOver={this.scaleTo92} onMouseOut={this.scaleTo100}>
                        <br></br>
                        <Card className="carta">
                            <img src ={jsImage} />
                            <Card.Body>
                            <Card.Title className="text-center text-secondary">JavaScript</Card.Title>


                            </Card.Body>

                        </Card>

                        </Col>
                        <Col className="col-md-5 col-10" onMouseOver={this.scaleTo92} onMouseOut={this.scaleTo100}>
                        <br></br>
                        <Card className="carta">
                            <img src ={reactImage} />
                            <Card.Body>
                            <Card.Title className="text-center text-secondary">React</Card.Title>


                            </Card.Body>

                        </Card>

                        </Col>


                    </Row>
                </Container>
                
            </div>
        )
    }
}
