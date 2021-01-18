import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel,Card } from 'react-bootstrap';
import{Link } from 'react-router-dom'
import { FaGithub,FaInstagram,FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


export default class FooterUsluge extends Component {
    render() {
        return (
            <div>
                 <Container className="footerUslugeMain border">
                    <Row>
                        <Col className="col-12 text-center"> <h2><span className="text-dark navBrend l">gmi-computing </span></h2>
                        </Col>
                        <Col className="col-12">
                        <h5>Email:<MdEmail />   gogadesignweb@gmail.com</h5><br></br>
                        <h5>Github: <a href='https://github.com/goranivankovic'> <FaGithub /></a></h5><br></br>
                        <h5>Telephone:<FaPhone />  +381/064-415-68-13</h5><br></br>
                        <h5>Instagram: <a href='https://www.instagram.com/'><FaInstagram /> </a>  </h5>
                        
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
