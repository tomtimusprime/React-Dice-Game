import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.face}`}></i>
                <h2>Testing, Testing</h2>
            </div>
        )
    }
}

export default Die;