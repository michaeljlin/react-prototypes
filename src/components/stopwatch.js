import React, { Component } from 'react';
import Time from './format_time';

class Stopwatch extends Component{
    start(){
        this.setState({
            status: 'running',
            start: new Date().getTime()
        });
        setTimeout(this.update, 10);
    };

    stop(){
        this.setState({
            status: 'stopped'
        });
    };

    update(){
        const {status, start} = this.state;

        if(status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }
    }

    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        });
    }

    constructor(props){
        super(props);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        };
    }
    render(){
        const {status, start, elapsed} = this.state;

        return(
            <div>
                <h1><Time elapsed={elapsed} /></h1>
                <p>{status}</p>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;