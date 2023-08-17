import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>A motivated and detail-oriented QA Engineer with a good foundation in programming and experience in test automation projects. Possessing a solid understanding of software testing basics and principles, I am equipped with the necessary skills to ensure high-quality software development. My ability to learn quickly and adapt to new testing environments and tools sets me apart. Proficient in JavaScript. I have the technical skills to create and implement effective automation scripts.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>Cypress</li>
                                    <li>Postman</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage