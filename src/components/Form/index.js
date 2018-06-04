import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };
    }

    handleSubmit(e) {
        const { name } = this.state;

        e.preventDefault();
        if (name) {
            this.props.onSubmit(name);
            this.setState({ name: '' });
        }
    }

    render() {
        const { name } = this.state;
        const { simulationRunning } = this.props;

        return (
            <form>
                <div className='form-group'>
                    <input
                        value={name}
                        onChange={(event) => { this.setState({ name: event.target.value })}}
                        name='title'
                        className='form-control'
                    />
                </div>
                <button
                    type='submit'
                    onClick={(event) => { this.handleSubmit(event); }}
                    className='btn btn-primary'
                >
                    Potvrdit
                </button>
                <a 
                    disabled={simulationRunning} 
                    className='btn'
                    onClick={() => { this.props.onSimulationRun() }}
                    >►</a>
                <a 
                    disabled={!simulationRunning} 
                    className='btn'
                    onClick={() => { this.props.onSimulationPause() }}
                    >❚❚</a>
            </form>
        );
    }
}
