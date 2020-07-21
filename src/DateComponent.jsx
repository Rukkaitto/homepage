import React, { Component } from 'react';

export class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.date = new Date()
    }
    

    getDay() {
        return this.props.days[this.date.getDay() - 1]
    }

    getMonth() {
        return this.props.months[this.date.getMonth()]
    }
    

    render() {
        return (
            <div className="Date">
                {this.getDay() + ' '}
                {this.date.getDate() + ' '}
                {this.getMonth() + ' '}
                {this.date.getFullYear()}
            </div>
        );
    }
}
