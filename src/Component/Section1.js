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
         <div className='text-center mb-5 mt-5'>
         <h1 style={{color:"white",fontSize:"4rem"}}>Alzheimer Detection Using Deep Learning</h1>
         </div>
         <div className='d-flex justify-content-center  order_box'>
        <div>
        <p style={{textTransform:"none",color:"rgb(255 255 255 / 82%)",fontSize:"1.2rem"}} className='mb-0'> Click the button below to initiate a specialized assessment designed to identify </p>
        <p style={{textTransform:"none",color:"rgb(255 255 255 / 82%)",fontSize:"1.2rem"}} className='mt-0 mb-3'> the presence and specific types of Alzheimer's disease.</p> 
        <div className='text-center'>
        <button className='order_now'>Click here</button>
         </div>      
        </div>

         </div>
         {/*Click the button below to initiate a specialized assessment designed to identify the presence and specific types of Alzheimer's disease. */}
        </Col>
        
        </Row>                
        </Container>              
       </div>
    
    </div>
  )
}

export default Section1