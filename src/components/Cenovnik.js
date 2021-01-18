import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button } from 'react-bootstrap';
import{Link } from 'react-router-dom';
import NavBarCenovnik from '../componentsParts/NavBarCenovnik.js'
import ProfStandBasic from '../componentsParts/ProfStandBasic.js'
import FooterPocetna from '../componentsParts/FooterPocetna.js'

export default class Cenovnik extends Component {
    render() {
        return (
            <div>
                <NavBarCenovnik />
                <br></br>
                <br></br>
                <br></br>
                <ProfStandBasic />
                <br></br>
                <br></br>
                <FooterPocetna />
                
            </div>
        )
    }
}
