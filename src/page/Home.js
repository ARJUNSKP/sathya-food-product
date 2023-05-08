import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import Productcard from '../component/Productcard';

function Home() {
  return (
    <Container fluid>
      <div className='tagline'>
        <h1>"Your Healthy Product in Safe Hands"</h1>
        <lable id="tageline-lable">Care about your health with Sathya foods</lable>
      </div>
      <div id="newproduct">
        <h1>New Product</h1>
      </div>
      <div className='new-product'>
        <div className='new-product-list1'>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
        </div>
      </div>
   </Container>

  )
}

export default Home