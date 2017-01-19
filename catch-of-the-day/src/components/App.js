import React from 'react';
import Header from '../components/Header';
import Order from '../components/Order';
import Inventory from '../components/Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      fishes: {},
      order: {},
    };
  }

  addFish(fish) {
    // update state
    let fishes = {...this.state.fishes};

    // add in new fish
    let timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // set state
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>

        <Order />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
        />
      </div>
    )
  }
}

export default App;
