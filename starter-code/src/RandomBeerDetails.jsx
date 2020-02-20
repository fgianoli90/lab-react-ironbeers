import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class RandomBeerDetails extends Component {
    render() {
        return (
            <div>
                <header><Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home"/></Link></header>
                <div><img src={this.props.randomBeerProp.image_url} alt="Beer Image"/></div>
                <div>{this.props.randomBeerProp.name} {this.props.randomBeerProp.attenuation_level}</div>
                <div>{this.props.randomBeerProp.tagline} {this.props.randomBeerProp.first_brewed}</div>
                <div>{this.props.randomBeerProp.description}<br/>{this.props.randomBeerProp.contributed_by}</div>
                
            </div>
        );
    }
}

export default RandomBeerDetails;