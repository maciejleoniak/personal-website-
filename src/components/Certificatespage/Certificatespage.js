import React from 'react'
import '../../pages/style.css';
import CertiCard from "./CertiCard";
import { Container, Row, Col } from 'react-bootstrap'
import fed from '../../Assets/FFC front end dev.jpeg'
import rwd from '../../Assets/FFC responsive web design.jpeg'

function Certificatespage() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <CertiCard
                imgPath={fed}
                isBlog={false}
                title="Front End Edeveloper"
                description="In the Front End Development Libraries Certification, I learned how to style my site quickly with Bootstrap. I learned also how to add logic to my CSS styles and extend them with Sass. I built applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux."
                ghLink=""
              />
            </Col>

            <Col md={6} className="project-card">
              <CertiCard
                imgPath={rwd}
                isBlog={false}
                title="Responsive Web Design"
                description="In this Responsive Web Design Certification, I learned the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. I also learned how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid."
                ghLink=""
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
} 

export default Certificatespage