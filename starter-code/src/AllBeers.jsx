import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AllBeers extends Component {
    findDetails=()=>{
        
    }

    showMeBeers=(beers)=>{
        return beers.map(eachBeer=>{
            return <li key={eachBeer._id}>
                        <Link to={`/AllBeers/${eachBeer._id}`}>
                            <img src={eachBeer.image_url} alt="beerlogo"/>
                        </Link>
                        <div>
                            {eachBeer.name}<br/>
                            {eachBeer.tagline}<br/>
                            {eachBeer.contributed_by}
                        </div> 
                    </li>
        })
    }
    render() {
        return (
            <div>
                <header><Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home"/></Link></header>
                <ul>
                    {this.showMeBeers(this.props.beersProp)}
                </ul>
            </div>
        );
    }
}

export default AllBeers;