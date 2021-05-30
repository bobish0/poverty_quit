import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './news.css';
import FooterPage from './FooterPage.js'

import {Textfield, Button} from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo2 from '../img/logo2.png';
import NEWS from '../img/news.png'
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

const API = 'https://newsapi.org/v2/everything?q=crypto&from=2021-04-30&sortBy=publishedAt&apiKey=051e568866ff4539b4cb468bc36b315f';


class News extends Component {

	constructor(props){
		super(props);
		this.state = {
			articles: [],
		}; 
	}
	
	componentDidMount(){
		fetch(API)
		.then(response => response.json())
		.then(data => this.setState({articles: data.articles}));
	}



    render()  {
		const {articles} = this.state;
        return (

            <div>
                		
				
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
			<h4>CRYPTOCURRENCY NEWS</h4>
			<hr></hr>
			
			<Textfield
    onChange={() => {}}
    label="Enter Stock/Currency"
    floatingLabel
    style={{width: '200px', margin:'2%'}}
/>

<Button style = {{margin:'auto'}} raised ripple>Search</Button>
		<div>


	<div className ='news-layout'>

	{articles.map(article =>
				<Card> 
					<Card.Body>
						<Card.Title><a target="_blank" href={article.url}><p><b>{article.title}</b></p></a></Card.Title>	
						<Card.Subtitle className='mb-2 text-muted'><i><p>(Source: {article.source.name})</p></i></Card.Subtitle>
						<Card.Text>{article.description}</Card.Text>
						<Card.Text><i>(Date: {article.publishedAt})</i></Card.Text>
					</Card.Body>
				
				</Card>
				
				)}


		</div>




	</div>

			
		</div>

		<FooterPage/>

	</div>

	
              
        )
    }
}

export default News;