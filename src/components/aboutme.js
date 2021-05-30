import React, {Component} from 'react';
import {Card, Chip, ChipContact, CardTitle, CardActions, Tooltip, Textfield, Button } from 'react-mdl';

import Form from 'react-bootstrap/Form';

import { VerticalTimeline, VerticalTimelineElement, WorkIcon}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './news.css';
import './aboutme.css';


import FooterPage from './FooterPage.js'
import Particles from 'react-particles-js';

import Profile from '../img/profile_pic.png'
import Github from '../img/github.jpg';
import Logo2 from '../img/logo2.png';


class About extends Component {

    render()  {
        return (




            <div>
                
{/*Particles JS HERE */}
<div className ='particles-js'>
				<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 7,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
		
	}} 
	height="100vh"
	/>  

		</div>{/*end of Particles Settings */}



		<div className ='first-page-landing'>

			<img className ='image-logo' src={Logo2}/>

		</div>

	<div className ='description'>

    <br></br> 


    <br></br><br></br>
<div className = 'layout-design'>

    <div className = 'profile-pic'>


    <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${Profile} ) center / cover`, margin: 'auto'}}>
        <CardTitle expand />
    </Card>
    </div>


    <div className ='profile-description'>

        <h4><u>ABOUT</u></h4>

        <p>My name is <b>Kristian Andreas Boban</b> and i am a Front-End Developer.  </p>
        <p>I know a bit about everything when it comes to Web/App Development. You can se some of my qualifications below. </p>
    </div>

</div>

<h4><u>QUALIFICATIONS</u></h4>
<div className = 'kompetens'>

    <div className = 'front-end'>
	
    

    <Tooltip label=" HyperText Markup Language" large><Chip> <ChipContact className="mdl-color--blue mdl-color-text--white">H</ChipContact> HTML5</Chip></Tooltip>
    <Chip> <ChipContact className="mdl-color--blue mdl-color-text--white">C</ChipContact>CSS3</Chip>
    <Chip> <ChipContact className="mdl-color--blue mdl-color-text--white">B</ChipContact>Bootstrap 3/4</Chip>
    </div>

    <div className = 'programming'>
    <Chip> <ChipContact className="mdl-color--purple mdl-color-text--white">J</ChipContact>Javascript</Chip>
    <Chip> <ChipContact className="mdl-color--purple mdl-color-text--white">R</ChipContact>React.js</Chip>
    <Chip> <ChipContact className="mdl-color--purple mdl-color-text--white">J</ChipContact>Jquery</Chip>
    </div>

    <div className = 'back-end'>
    <Chip> <ChipContact className="mdl-color--red mdl-color-text--white">F</ChipContact>Firebase</Chip>
    <Chip> <ChipContact className="mdl-color--red mdl-color-text--white">G</ChipContact>Google Analytics</Chip>
    <Chip> <ChipContact className="mdl-color--red mdl-color-text--white">W</ChipContact> Wordpress</Chip>
    </div>

    <div className = 'styling'>
    <Chip> <ChipContact className="mdl-color--teal mdl-color-text--white">S</ChipContact>Sass</Chip>
    <Chip> <ChipContact className="mdl-color--teal mdl-color-text--white">L</ChipContact>Less</Chip>
    <Chip> <ChipContact className="mdl-color--teal mdl-color-text--white">T</ChipContact>Tailwind</Chip>
    </div>


</div>



<a target='_blank' href={'https://github.com/bobish0'}><img height='200' src={Github} alt="Github" /></a>

<br></br>
    <div>
		<h4><u>CONTACT</u></h4>



<div className='contact-form'>
{/*Name */}
<Textfield
    onChange={() => {}}
    label="Name"
    floatingLabel
    style={{width: '250px', margin:'2%'}}
/>
<br></br>
<Textfield
    onChange={() => {}}
    label="Email"
    floatingLabel
    style={{width: '250px'}}
/>

<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number"
	style={{width: '250px', margin:'2%'}}
    floatingLabel
/>


<br></br>

<Textfield
    onChange={() => {}}
    label="Message..."
    rows={3}
    style={{width: '250px'}}
/>
<br></br>
{/* Raised button with ripple */}
<Button style = {{margin:'auto'}} raised ripple>Send</Button>
<br></br><br></br>
</div>

<br></br><br></br>
<div className ='timeline-section'>
  	
	
</div>

	</div>
  
             
    </div>
	<FooterPage/>   
                        
                </div>
        )
    }
}

export default About;