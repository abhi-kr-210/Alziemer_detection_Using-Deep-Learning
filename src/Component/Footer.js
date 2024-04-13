import React from 'react'
import "../../src/FooterStyle.css"
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
    <footer className="footer_section mt-5">
    <Container>
      <Row className="copy_right">
        <Col >
          <div className='d-flex  justify-content-center text-center'>
            <ul className="list-unstyled">
              <li>

                <Link to="/" className=" text-nowrap">
                  © 2024 <span>COPYRIGHT</span>. All Rights Reserved
                </Link>
              </li>
              <li>
                <Link to="/" >About Us</Link>
              </li>
              <li>
                <Link to="/" >Terms Of Use</Link>
              </li>
              <li >
                <Link to="/" >Privacy Policy</Link>
              </li>

            </ul>

          </div>
        </Col>
      </Row>
    </Container>
  </footer>
    </div>
  )
}

export default Footer