import React, {Component} from 'react';
import Data from './cryptoApi/cryptoList100.json';
import '../App.css';
import './portfolio.css';
import {Checkbox, DataTable, Textfield, Table, TableHeader,Button,Dialog, DialogTitle,DialogContent,DialogActions } from 'react-mdl';
import  {useState} from 'react';
import SearchBar from './searchBar.js';
import Particles from 'react-particles-js';
import Logo2 from '../img/logo2.png';

import FooterPage from './FooterPage.js'











	



class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.handleOpenDialog = this.handleOpenDialog.bind(this);
		this.handleCloseDialog = this.handleCloseDialog.bind(this);
	  }
	
	  handleOpenDialog() {
		this.setState({
		  openDialog: true
		});
	  }
	
	  handleCloseDialog() {
		this.setState({
		  openDialog: false
		});
	  }



    render()  {
    
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

        <div className = 'description'> 
		<br></br>
		<h4><u>Current Wallet</u></h4>
       
		<div className = 'data-table'>
	<DataTable
    shadow={0}
    rows={[
        {currency: 'Bitcoin (BTC)', quantity: 5, price: 53697 + '$', value:268+","+485  + ' $'},
        {currency: 'Ethereum (ETH)', quantity: 10, price: 3856 + '$', value:38+","+560  + ' $'},
        {currency: 'Cardano (ADA)', quantity: 10, price: 1.85 + '$', value:18.5  + ' $'},
		{currency: 'Polkadot (DOT)', quantity: 25, price: 40 + '$', value:1000  + ' $'},
        {currency: 'Ripple (XRP)', quantity: 10000, price: 1.35 + '$', value:13+","+500  + ' $'},
        {currency: 'Binance Coin (BNB)', quantity: 10, price: 635 + '$', value:6350  + ' $'}
    ]}
>
    <TableHeader name="currency" tooltip="Name of the CryptoCurrency">Currency</TableHeader>
	<TableHeader name="price" tooltip="Price of the Asset">Price USD</TableHeader>
    <TableHeader numeric name="quantity" tooltip="Quantity of the Asset">Quantity</TableHeader>
    <TableHeader numeric name="value" tooltip="Total Value">Value</TableHeader>


</DataTable>

</div>

                <br></br>

        
                <h4><u>Top 50 Cryptos</u></h4>
                    <SearchBar/>

<br></br>

            </div>      


                {/*https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false*/ }

				<FooterPage/>

			 
            </div>
                
            
        )
    }
}

export default Portfolio;