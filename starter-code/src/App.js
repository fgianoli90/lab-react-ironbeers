import React, { Component } from 'react';
import AllBeer from './images/AllBeer.jpg';
import RandBeer from './images/RandBeer.jpg';
import NewBeer from './images/NewBeer.jpg';
import './App.css';
import Axios from 'axios'
import AllBeers from './AllBeers';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  state={
    beersList:[]
}
  componentDidMount(){
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then(res=>{
        console.log("inside axious", res.data)
        this.setState({
            beersList: res.data
        })
    })
   
  }
  render() {
    console.log("this",this.state.beersList)
    return (
      <div className="BeerPage">
        <div className="AllBeer">
            <img src={AllBeer} alt="beer"/>
            <h2><Link to="/AllBeers">All Beers</Link></h2>
            <p>Dive into the world of beers. See all beers in our catalog of beers from all over. </p>
        </div>
        <div className="RandomBeer">
            <img src={RandBeer} alt="beer"/>
            <h2><Link to="/RandomBeers">Random Beers</Link></h2>
            <p>Don't know which beer to pick? Not to savvy on the topic of beer? Just turned 21 and want to discover the world of beer? Or just can't make a decision to save your life? Click above to get a random beer.</p>
        </div>
        <div className="NewBeer">
            <img src={NewBeer} alt="beer"/>
            <h2><Link to="/NewBeers">New Beers</Link></h2>
            <p>Are you beer pioneer? Share what you have discovered.</p>
        </div>
        <Switch>
          <Route exact path="/" Component={App}></Route>
          <Route exact path="/AllBeers" render={(props) => <AllBeers {...props} beersProp={this.state.beersList}/>}></Route>
          <Route exact path="/RandomBeers"  render={(props) => <AllBeers/>}></Route>
          <Route exact path="/NewBeers"  render={(props) => <AllBeers/>}></Route>
          {/* <Route exact path="/AllBeers/:beerID" render={(props) => <BeerDetails {...props} countries={this.state.countries} />} /> */}

        </Switch>
      </div>
    );
  }
}

export default App;
