import React, { Component } from 'react';
import Die from "./Die";
import "./RollDie.css";
class RollDie extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        //pick 2 rolls
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        //wait 1 second and then reset rolling variable to false
        setInterval(() => {
            this.setState({rolling: false})
        }, 2000);
    }
    render() {
        return (
            <div className="RollDie">
                <div className="RollDie-Container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                {this.state.rolling ? 'Rolling...' : 'Roll the dice!'}
                </button>
            </div>
        )
    }
}

export default RollDie;