import React, { Component } from 'react';
import AllBeer from './images/AllBeer.jpg';
import RandBeer from './images/RandBeer.jpg';
import NewBeer from './images/NewBeer.jpg';
import { Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="AllBeer">
                    <img src={AllBeer} alt="beer"/>
                    <h2><Link to="/AllBeers">All Beers</Link></h2>
                    <p>Dive into the world of beers. See all beers in our catalog of beers from all over. </p>
                </div>
                <div className="RandomBeer">
                    <img src={RandBeer} alt="beer"/>
                    <h2><Link to="/AllBeers/random">Random Beers</Link></h2>
                    <p>Don't know which beer to pick? Not to savvy on the topic of beer? Just turned 21 and want to discover the world of beer? Or just can't make a decision to save your life? Click above to get a random beer.</p>
                </div>
                <div className="NewBeer">
                    <img src={NewBeer} alt="beer"/>
                    <h2><Link to="/NewBeer">New Beers</Link></h2>
                    <p>Are you beer pioneer? Share what you have discovered.</p>
                </div>
            </div>
        );
    }
}

export default Home;