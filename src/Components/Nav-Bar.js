import {Col, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Spin from 'react-reveal/Spin';

function NavScrollExample({Searching}) {
const [val,setVal]=useState("");

const onsearch=(e)=>{
  e.preventDefault();
  Searching(val)
  setVal("")
}
  return (
    
      <Col sm="12">
    <Navbar className='NAV-Css ' expand="lg">
      <Container >
      
        <Navbar.Brand href="#"> 
        
        <p class="brannd">
        <Spin>
        مطعم روجيناليتا
      
      </Spin>
        </p>
        
        </Navbar.Brand>
     
          <Form className="d-flex">
            <Form.Control
              type="text"
              onChange={(e)=> setVal(e.target.value)}
              value={val}
              className="mx-2"
              aria-label="Search"
            />
            <Button style={{color:"#e45619"}} type="button" className="btn-light" value="إبحث" onClick={ onsearch} >ابحث</Button>
          </Form>

      </Container>
    </Navbar>
    </Col>
   

  );
}

export default NavScrollExample;