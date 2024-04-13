import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../src/Homestyles.css"
function Section1() {
  return (
    <div>
       <div className='hero_section_1'>
        <Container>
        <Row>
        
        <Col lg={12}>
         <div className='text-center'>
         <h1 style={{color:"white",fontSize:"4rem"}}>Alzimer Detection Using Deep Learning</h1>
         </div>
        
        </Col>
        
        </Row>                
        </Container>              
       </div>
    
    </div>
  )
}

export default Section1