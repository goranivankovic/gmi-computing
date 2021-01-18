import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel,Card } from 'react-bootstrap';
import{Link } from 'react-router-dom'

export default class TriKoraka extends Component {
    render() {
        return (
            <div>
                <Container className="psbMain" fluid>
                    
              
                    <Row className="pbsRed" >
                        <Col className="col-12"> <h2 className="text-center text-secondary">Dogovorom do uspeha</h2></Col>
                        
                        <Col className="col-lg-4 col-10" >
                        <br></br>
                        <Card className="psb">

                        
                            <Card.Body>
                            <Card.Title className="text-center text-light bg-warning psbT" >Prvi korak</Card.Title>
                            <Card.Text className="h5 text-bottom h-75 psbD">
                            
Dogovor sa musterijom:<br></br>
1.Telefonski poziv.<br></br>
2.Email poruka.<br></br>
3.Viber poziv ili poruka.<br></br>


                            </Card.Text>


                            </Card.Body>

                        </Card>

                        </Col>
                        <Col className="col-lg-4 col-10">
                        <br></br>
                        <Card className="psb">
                            
                            <Card.Body>
                            <Card.Title className="text-center text-light bg-warning psbT">Drugi Korak</Card.Title>
                            <Card.Text  className="h5 text-bottom h-75 psbD">
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
                            <Card.Title className="text-center text-light bg-warning psbT">Treci Korak</Card.Title>
                            <Card.Text className="h5 text-bottom h-75 psbD">
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
