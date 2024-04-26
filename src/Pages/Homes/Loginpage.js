import React from 'react'
import "../../../src/LoginPage.css"
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../assets/doc_login.jpg"
import img2 from "../../assets/9193824.png"
function Loginpage() {
  return (
    <div className='login_page '>
    <Container className='login_page_container '>
    <Row  className=' d-flex justify-content-center row_container'>
    <Col lg={6} md={6} className='column1_login d-flex justify-content-end'  style={{padding:"0px"}}>
    <img src={img1} alt="doc" className='img-fluid doctor_image' />
    </Col>
    <Col lg={6} md={6} className='login_page_row column2_login d-flex align-items-center justify-content-center' style={{padding:"0px"}}>
    <div>
     <div className='text-center mt-3'>
     <img src={img2} alt="doc" className='img-fluid ' style={{maxWidth:"139px"}} />
     </div>
    <h1 style={{textTransform:"none",fontFamily:"'Poppins', sans-serif",fontWeight:"700"}}>Welcome back</h1>
     <form>
     <div className='mb-3'>
     <label>Username</label>
     <div><input type="text" placeholder='Enter Username '  /></div>
     </div>

     <div className='mb-3'>
     <label>Email </label>
     <div><input type="text" placeholder='Enter Email' /></div>
     </div>

     <div className='mb-3'>
     <label>Password</label>
     <div><input type="text" placeholder='Enter Password '/></div>
     </div>

     <div className='text-center mt-5 mb-5'>
     <button className='btn btn-primary'>Login </button>
     </div>
     </form>
    </div>
    </Col>
    </Row>
    </Container>
    
    </div>
  )
}

export default Loginpage