import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'


function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch via Linkdin</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a coder role. <br /> However, if you have any other requests or
            questions, don't hesitate to contact me. <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://www.linkedin.com/in/maciek-leoniak-90a1a926b/");
          }}
          
        >Say Hello</button>
        <span></span>
        <hr className='line' />
      </Container>
    </div>
  )
}

export default Contactpage