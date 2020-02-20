import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import AllBeers from './AllBeers';
import BeerDetails from './BeerDetails';  
import RandomBeerDetails from './RandomBeerDetails';
import NewBeer from './NewBeer';
import {Switch, Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  state={
    beersList:[],
    ready:false
}
  componentDidMount(){
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then(res=>{
        console.log("inside axious", res.data)
        this.setState({
            beersList: res.data,
            ready: true
        })
    })
   
  }

  randomBeer=()=>{
    let randomBeer= this.state.beersList[Math.floor(Math.random()*this.state.beersList.length)]
    console.log("inside randomBeer",randomBeer)
    return randomBeer
  }
  render() {
    let randomBeer=this.randomBeer()
    console.log("this",this.state.beersList,randomBeer)
    return (
      <div className="BeerPage">
        
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/AllBeers" render={(props) => <AllBeers {...props} beersProp={this.state.beersList} readyProp={this.state.ready}/>}></Route>
          <Route exact path="/AllBeers/random" render={(props) => <RandomBeerDetails {...props} randomBeerProp={this.randomBeer()}/>}></Route>
          <Route exact path="/NewBeer" render={(props) => <NewBeer {...props}/>}></Route>
          <Route exact path="/AllBeers/:beerID" render={(props) => <BeerDetails {...props} beersProp={this.state.beersList} />} />

        </Switch>
      </div>
    );
  }
}

export default App;
