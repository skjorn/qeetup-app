import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      i: 0
    };

  }
  render() {
    const { items, i } = this.state;

    return (
      <div className="App">
          <div className="container">
              <div className='col-xs-12'>
                <Form onSubmit={(name) => { this.setState({ items: [{ id: i, name: name }, ...this.state.items], i: i + 1 });}} />
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
