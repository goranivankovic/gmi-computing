import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel,Card } from 'react-bootstrap';
import{Link } from 'react-router-dom'

export default class ProfStandBasic extends Component {
    constructor(props){
        super(props)
       
    }

    render() {
        return (
            <div>
                <Container className="psbMain" fluid>
                    
              
                    <Row className="pbsRed" >
                        <Col className="col-12"> <h2 className="text-center text-secondary">Paketi</h2></Col>
                        
                        <Col className="col-lg-4 col-10" >
                        <br></br>
                        <Card className="psb">

                        
                            <Card.Body>
                            <Card.Title className="text-center text-light bg-info psbT" >Basic</Card.Title>
                            <Card.Text className="h6 text-bottom h-75 psbD">
                                
                            Broj stranica - do 10 Mi popunjavamo do 10 stranica CSS responsive originalan dizajn Administratorski deo sajta Kontakt Forma Online text editor Galerija slika na svakoj stranici
                            Cena:120evra



                            </Card.Text>


                            </Card.Body>

                        </Card>

                        </Col>
                        <Col className="col-lg-4 col-10">
                        <br></br>
                        <Card className="psb">
                            
                            <Card.Body>
                            <Card.Title className="text-center text-light bg-info psbT">Standard</Card.Title>
                            <Card.Text  className="h6 text-bottom h-75 psbD">
                            Broj stranica - neograničen Mi popunjavamo do 20 stranica CSS responsive originalan dizajn Administratorski deo sajta Kontakt Forma Online text editor Galerija slika na svakoj stranici
                             Cena:200evra


                            </Card.Text>


                            </Card.Body>

                        </Card>

                        </Col>
                     
                        <Col className="col-lg-4 col-10">
                        <br></br>
                        <Card className="psb">
                           
                            <Card.Body>
                            <Card.Title className="text-center text-light bg-info psbT">Profesional</Card.Title>
                            <Card.Text className="h6 text-bottom h-75 psbD">
                            Broj stranica - neograničen Mi popunjavamo do 30 stranica CSS responsive originalan dizajn Administratorski deo sajta Kontakt Forma Galerija slika na svakoj stranici Katalog proizvoda Neograničen broj proizvoda Osnovna SEO optimizacija.
Cena:300 evra

                            </Card.Text>

           


                            </Card.Body>

                        </Card>

                        </Col>
                      

                    </Row>
                </Container>


                
            </div>
        )
    }
}
