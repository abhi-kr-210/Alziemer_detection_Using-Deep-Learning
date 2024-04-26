import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Section5() {
  return (
    <section className='related_content'>
    <Container>
    <Row>
    <div>
    <h2 style={{textTransform:"none",color: "#3e505d"}}>Read related content</h2>
   </div>
   <div style={{border:"1px solid #00000030"}} className='mb-5 mt-3'>
   </div>
    </Row>
    <Row  className='d-flex justify-content-between '>
    <Col  className='related_content_box  mb-3 mx-1 ' style={{padding:"20px"}} xs={{span:8,offset:2}}  md={5} lg={3}>
      <div className=''>
    
       <header >
       <h3 style={{textTransform:"none",color:"white"}} className='mt-3 mb-3'>
       <a href="https://www.alzint.org/about/dementia-facts-figures/" style={{textTransform:"none",color:"white"}}>Dementia facts &amp; figures</a>
       </h3>
       </header>
       <Container className='mb-3'><Row><div style={{border:"1.5px solid white"}} className='style_bar_box'>
       <div className='style_bar'></div>
       </div></Row></Container>
       <p>Dementia is a collective name for brain syndromes which affect memory, 
       thinking, behaviour and emotion, and is the leading cause of disability
        and dependency among the elderly. Each person experiences dementia in their 
        own way, but generally those affected eventually need help with all aspects 
        of daily life.
        <a href="https://www.alzint.org/about/dementia-facts-figures/" className="read-more"style={{textDecoration:"none",color:"white"}}>Read More</a></p>
      
      </div>
    </Col>
    
    <Col className='related_content_box  mb-3 mx-1 ' style={{padding:"20px"}}  xs={{span:8,offset:2}}  md={5} lg={3}>
    <div className=''>
  
    <header >
    <h3 style={{textTransform:"none",color:"white"}} className='mt-3 mb-3'>
    <a href="https://www.alzint.org/about/dementia-facts-figures/" style={{textTransform:"none",color:"white"}}>World Alzheimer Reports</a>
    </h3>
    </header>
    <Container className='mb-3'><Row><div style={{border:"1.5px solid white"}} className='style_bar_box'>
    <div className='style_bar'></div>
    </div></Row></Container>
    <p>The World Alzheimer Reports are a comprehensive source of global socioeconomic information
     on dementia. Each World Alzheimer Report is on a different topic, so the previous reports
      remain important sources of information with global relevance.
      <a href="https://www.alzint.org/about/dementia-facts-figures/" className=" read-more" style={{textDecoration:"none",color:"white"}} >Read More</a> </p>
   
   </div>
    </Col>
    <Col className='related_content_box  mb-3 mx-1 '  style={{padding:"20px"}} xs={{span:8,offset:2}}  md={5} lg={3}>
    <div className=''>
    <header >
    <h3 style={{textTransform:"none",color:"white"}} className='mt-3 mb-3'>
    <a href="https://www.alzint.org/about/dementia-facts-figures/" style={{textTransform:"none",color:"white"}}>ADI Conference</a>
    </h3>
    </header>
    <Container className='mb-3'><Row><div style={{border:"1.5px solid white"}} className='style_bar_box'>
    <div className='style_bar'></div>
    </div></Row></Container>
    <p>Alzheimer's Disease International holds its international conference every two years. 
    The ADI conference is one of the longest running international conferences on dementia.
    <a href="https://www.alzint.org/what-we-do/adi-conference/" className="read-more" style={{textDecoration:"none",color:"white"}} >Read More</a> </p>
   
   </div>
    </Col>
    </Row>
    </Container>
    
    
    </section>
  )
}

export default Section5