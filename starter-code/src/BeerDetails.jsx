import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BeerDetails extends Component {
    findDetails = () => {
        console.log('beer detail ID:',this.props.match.params.beerID, this.props.beersProp)
        let theBeer = this.props.beersProp.find(eachBeer => {
            return eachBeer._id === this.props.match.params.beerID
        })
        console.log("inide countryDetail",theBeer)
        return theBeer
        
    }
    
    render() {
        let theBeer= this.findDetails()
        return (
            <div>
                <header><Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home"/></Link></header>
                <div><img src={theBeer.image_url} alt="Beer Image"/></div>
                <div>{theBeer.name} {theBeer.attenuation_level}</div>
                <div>{theBeer.tagline} {theBeer.first_brewed}</div>
                <div>{theBeer.description}<br/>{theBeer.contributed_by}</div>
            </div>
        );
    }
}

export default BeerDetails;