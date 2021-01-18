import React, { Component } from 'react';
import {Container,Row,Col,Navbar,Nav,Button } from 'react-bootstrap';
import{Link } from 'react-router-dom'
import Anime from 'react-anime'


export default class NavBarStandard extends Component {
    render() {
        return (
            <div>
      
                <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
    <Col className="col-sm-4 col-4"> <Anime translateX={[350,0]} duration={2500}> <Navbar.Brand className="text-dark h1 l"><span className="text-white navBrend">gmi-computing </span></Navbar.Brand></Anime> </Col>  
<Col className="col-sm-7 col-4 justify" >
    <Nav className="mr-auto navBarItmes">
<Anime translateY={[-250,0]} duration={2000} delay={(el,i)=>{return i * 100}}>
  <Link to="/"><Nav.Item className="text-light h6">Početna</Nav.Item></Link>
 <Link to="/usluge"><Nav.Item className="text-light h6">Usluge</Nav.Item></Link>   
  <Link to="/cenovnik"> <Nav.Item className="text-light h6">Cenovnik</Nav.Item></Link> 
   <Link to="/kontakt"> <Nav.Item className="text-light h6">Kontakt</Nav.Item></Link>

</Anime>
    </Nav>
  </Col>
  </Navbar>
         
            </div>
        )
    }
}
