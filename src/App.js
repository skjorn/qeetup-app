import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

const INITIAL_POINTS = 50;
const DELTA_LIMIT = 20;
const SIMULATION_DELAY = 1000;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      i: 0,
      simulationRunning: false,
    };

    this.handleSimulationRun = this.handleSimulationRun.bind(this);
    this.handleSimulationPause = this.handleSimulationPause.bind(this);
    this.simulate = this.simulate.bind(this);
  }

  handleSimulationRun() {
    if (!this.simulationHandle) {
      this.setState({ simulationRunning: true });
      this.simulationHandle = setInterval(this.simulate, SIMULATION_DELAY);
    }
  }

  handleSimulationPause() {
    if (this.simulationHandle) {
      this.setState({ simulationRunning: false });
      clearInterval(this.simulationHandle);
      this.simulationHandle = null;
    }
  }

  simulate() {
    this.setState((state) => {
      return {
        items: state.items
          .map(item => {
            const delta = Math.round(Math.random() * DELTA_LIMIT * 2) - DELTA_LIMIT;
            return { 
              ...item,
              points: item.points + delta,
              delta: delta,
            };
          })
          .filter(item => item.points > 0)
      };
    });
  }

  render() {
    const { items, i, simulationRunning } = this.state;

    return (
      <div className="App">
          <div className="container">
              <div className='col-xs-12'>
                <Form 
                  onSubmit={(name) => { 
                    this.setState({ 
                      items: [
                        { id: i, name: name, points: INITIAL_POINTS, delta: 0 }, 
                        ...this.state.items
                      ], 
                      i: i + 1 
                    });
                  }} 
                  onSimulationRun={this.handleSimulationRun}
                  onSimulationPause={this.handleSimulationPause}
                  simulationRunning={simulationRunning}
                  />
                <List
                    items={items}
                    removeItem={(id) => {
                      const newArr = this.state.items.filter((item) => {
                        return item.id !== id;
                      });

                      this.setState({ items: newArr });
                    }}
                />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
