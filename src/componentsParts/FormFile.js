import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel,Card ,Form} from 'react-bootstrap';
import{Link } from 'react-router-dom'

export default class FormFile extends Component {
    render() {
        return (
            <div>
              <Container>
                <Row>
                  <Col className="col-12"><h4 className="text-danger">Posalji kontakt</h4> </Col>
                  <Col className="col-md-8 col-12">


                 
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Ime</Form.Label>
    <Form.Control type="text" placeholder="Upisi ime" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Prezime</Form.Label>
    <Form.Control type="text" placeholder="Upisi prezime" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Upisi email" />
   
  </Form.Group>
  
  <Button variant="primary" type="submit">
   Poslaji
  </Button>
</Form>

</Col>
</Row>
</Container>
                
            </div>
        )
    }
}
