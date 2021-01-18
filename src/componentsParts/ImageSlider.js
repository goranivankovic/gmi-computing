import React, { Component } from 'react'
import {Container,Row,Col,Navbar,Nav,Button,Carousel } from 'react-bootstrap';
import{Link } from 'react-router-dom'
import coding from '../img/coding.jpg'
import laptop from '../img/laptop.jpg'
import laptop2 from '../img/laptop2.jpg'


export default class ImageSlider extends Component {
    render() {
        return (
            <div>
            
                 
                    
                        <Carousel className="slika">
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={coding}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4 className="l">Najsavremenije Tehnologije</h4>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={laptop}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h4>Najbolji Dizajn</h4>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={laptop2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h4>Zajedno do Uspeha</h4>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


                
            </div>
        )
    }
}
