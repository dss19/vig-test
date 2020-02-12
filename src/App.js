import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Menu from './components/Menu';
import Items from './components/Items';
import About from './components/About';
import './App.css';



class App extends Component {
  
  state = {
    items: [
      {name: 'item1', quantity: 1, price: 20},
      {name: 'item2', quantity: 5, price: 5},
      {name: 'item3', quantity: 3, price: 30}
    ]
  }

  render() {
    return (
      <div className="App">              
        <Switch>
          <Route exact path="/"><Redirect to="/menu" /></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/items" render={() => 
            <Items items={this.state.items} />
          }/>
          <Route path="/about" component={About}/>
        </Switch>              
      </div>
    )
  }  
}

export default App;
