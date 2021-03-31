import React, { Component } from 'react';
import Die from "./Die";

class RollDie extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one"
        }
    }
    render() {
        return (
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDie;