import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button } from 'react-bootstrap';
import{Link } from 'react-router-dom';
import NavBarUsluge  from '../componentsParts/NavBarUsluge.js'
import ImageTextCol from '../componentsParts/ImageTextCol.js';
import TriKoraka from '../componentsParts/TriKoraka.js';
import FooterPocetna from '../componentsParts/FooterPocetna.js';

export default class Usluge extends Component {
    render() {
        return (
            <div>
                <NavBarUsluge />
                <br></br>
                <br></br>
                <ImageTextCol />
                <br></br>
                <br></br>
                <TriKoraka />
                <br></br>
                <br></br>
                <FooterPocetna />
                
                
            </div>
        )
    }
}
