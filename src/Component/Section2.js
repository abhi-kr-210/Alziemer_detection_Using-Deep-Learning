import React from 'react'
import "../../src/Homestyles.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Section2() {
  return (
    <div>
      <section className='about_section mt-5'>
         <div className='text-center about_heading mb-5'>
          <h1 style={{textTransform:"none",color:"#1c0040",textDecoration:"underline"}}>About The Disease</h1>
         </div>
        <Container className='mb-5'>
        <Row>
        <Col lg={6} className='mb-3 mt-5'>
        <div>
        <p>Alzheimer's disease is a brain disorder that gets worse over time.
         It's characterized by changes in the brain that lead to deposits of certain 
         proteins. Alzheimer's disease causes the brain to shrink and brain cells to 
         eventually die. Alzheimer's disease is the most common cause of dementia — a 
         gradual decline in memory, thinking, behavior and social skills. These changes
          affect a person's ability to function.
          About 6.5 million people in the United States age 65 and older live with Alzheimer's disease.
           Among them, more than 70% are 75 years old and older. Of the about 55 million people
            worldwide with dementia, 60% to 70% are estimated to have Alzheimer's disease.</p>
        <ul>
         <li>Alzheimer’s disease is the most common type of dementia.</li>
         <li>It is a progressive disease beginning with mild memory loss and
          possibly leading to loss of the ability to carry on a conversation and 
          respond to the environment.</li>
         <li>Alzheimer’s disease involves parts of the brain that control thought, memory, and 
         language.</li>
         <li>It can seriously affect a person’s ability to carry out daily activities.</li>
        </ul>
        </div>
        <div className='d-flex justify-content-end mt-5'>
        <a href="https://www.who.int/news-room/fact-sheets/detail/dementia" target="_blank" rel="noopener noreferrer" 
        className='learn_more' style={{textDecoration:"none"}}>Learn More</a>
        </div>
        </Col>   
        <Col lg={6}>
        
        
        </Col>      
        </Row>        
        </Container>      
       </section>
    
    </div>
  )
}

export default Section2