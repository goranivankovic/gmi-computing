import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button } from 'react-bootstrap';
import{Link } from 'react-router-dom';
import NavBarKontakt from '../componentsParts/NavBarKontakt.js'
import FormFile from '../componentsParts/FormFile.js'
import FooterPocetna from '../componentsParts/FooterPocetna.js'


export default class Kontakt extends Component {
    render() {
        return (
            <div>
                <NavBarKontakt />
                <br></br>
                <br></br>
                <FormFile />
                <br></br>
                <br></br>
                <br></br>
                <FooterPocetna />
                
            </div>
        )
    }
}
