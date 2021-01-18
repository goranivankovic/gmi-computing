import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button } from 'react-bootstrap';
import{Link } from 'react-router-dom';
import NavBarPocetna from '../componentsParts/NavBarPocetna.js';
import ImageSlider from '../componentsParts/ImageSlider.js';
import ThreeImages from '../componentsParts/ThreeImages.js';
import ImageTextCol from '../componentsParts/ImageTextCol.js';
import ProfStandBasic from '../componentsParts/ProfStandBasic.js';
import FooterPocetna from '../componentsParts/FooterPocetna.js';

export default class Pocetna extends Component {
    
    render() {
        return (
            <div>
                <NavBarPocetna />
                <ImageSlider />
                <br></br>
                <ThreeImages />
                <br></br>
                <ImageTextCol />
                <ProfStandBasic />
                <br></br>
                <FooterPocetna />
                
            </div>
        )
    }
}
