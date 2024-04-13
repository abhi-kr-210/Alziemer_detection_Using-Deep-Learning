import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import im1 from "../assets/im1.png"
import im2 from "../assets/im2.png"
import im3 from "../assets/im3.png"
function Section3() {
  return (
    <div>
    <section  className='details_section mb-5 mt-5'>
     <div className='d-flex justify-content-center  mt-5 mb-5'>
     <div className='num_box'><h1>3</h1></div>
     <div>
     <h1 style={{textTransform:"none",color:"white",fontSize:"3.5rem"}} className='mb-0'>Most Common</h1>
     <h1 style={{textTransform:"none",color:"white",fontSize:"3.5rem"}} className='mt-0'>Forms</h1>
     </div>
     </div>
    <Container className='mb-5'>
    <Row className='d-flex justify-content-between'>
    <Col lg={3} className='column_details mb-5'>
    <img src={im1} alt="logo" className='img-fluid mt-3' />
    <div className='text-center'>
    <h3>6 in 10</h3>
    <h1>ALZHEIMER'S</h1>
    <h6 style={{textTransform:"none"}}>The <strong>most common form </strong>of dementia</h6>
    <p>Caused by the build-up of two 
    proteins ,called amyloid and tau,in the brain which damage the nerve cells.</p>
    </div>
    <div className='small_box_1 d-flex justify-content-center align-items-center'><h2 style={{color:"white"}}>1</h2></div>
    </Col>  
    <Col lg={3} className='column_details mb-5 '>
    <img src={im2} alt="logo" className='img-fluid mt-3' />
    <div className='text-center'>
    <h3>2 in 10</h3>
    <h1>VASCULAR</h1>
   
    <p>Where there is a lack of blood flowing to the brain 
    and can be related to stroke .Affects decision making and
    ability to orgnise things.</p>
    </div>
    <div className='small_box_1 d-flex justify-content-center align-items-center'><h2 style={{color:"white"}}>2</h2></div>
    </Col>
    <Col lg={3} className='column_details mb-5 '>
    <img src={im3} alt="logo" className='img-fluid mt-3' />
    <div className='text-center'>
    <h3>1 in 10</h3>
    <h1>LEWY BODIES</h1>
    <p>Small round clumps of protein (Lewry bodies) build up inside the brain's
    nerve cells ,disrupting the communication.
    </p>
    </div>
    <div className='small_box_1 d-flex justify-content-center align-items-center'><h2 style={{color:"white"}}>3</h2></div>
    </Col> 
    </Row>   
    </Container>
    </section>
    
    
    </div>
  )
}

export default Section3