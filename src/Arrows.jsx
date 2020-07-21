import React, { Component } from 'react';
import { faAbascus } from '@fortawesome/fontawesome-free'

class Arrows extends Component {
    constructor(props) {
        super(props);
        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }
    
    handlePrevious() {
        this.props.handlePrevious()
    }

    handleNext() {
        this.props.handleNext()
    }

    render() {
        return (
            <div className="Arrows">
                <a className="Arrow" href="#" onClick={this.handlePrevious}>&lt;</a>
                <a className="Arrow" href="#" onClick={this.handleNext}>&gt;</a>
            </div>
        );
    }
}

export default Arrows;