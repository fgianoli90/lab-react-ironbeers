import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class NewBeer extends Component {
    state={   
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state).then(res=>
           console.log(res)).catch(err=>console.log(err))
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }  
    
    render() {
        return (
            <div className="NewBeerClass">
                <header><Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home"/></Link></header>
                <div className="newBeerForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="beer-inputs">
                    <span>Name: </span><input type="text" name="name" value={this.state.beerName} onChange={this.onChange}/>
                    <span>Tagline: </span><input type="text" name="tagline" value={this.state.beerTagline} onChange={this.onChange}/>
                    <span>Description: </span><input type="text" name="description" value={this.state.beerDescription} onChange={this.onChange}/>
                    <span>First Brewed: </span><input type="text" name="first_brewed" value={this.state.beerFirstBrewed} onChange={this.onChange}/>
                    <span>Brewers Tip: </span><input type="text" name="brewers_tip" value={this.state.beerBrewersTip} onChange={this.onChange}/>
                    <span>Attenuation Level: </span><input type="number" name="attenuation_number" value={this.state.beerAttenuationLevel} onChange={this.onChange}/>
                    <span>Contributed By: </span><input type="text" name="contributed_by" value={this.state.beerContributedBy} onChange={this.onChange}/>
                    </div>
                    <div className="sub-btn" >
                        <input type="submit"/>
                    </div>
                </form>

                </div> 
            </div>
        );
    }
}
export default NewBeer