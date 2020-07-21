import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.hideClock = this.hideClock.bind(this)
        this.hideDate = this.hideDate.bind(this)
    }

    hideClock(e) {
        this.props.hideClock(e.target.value)
    }

    hideDate(e) {
        this.props.hideDate(e.target.value)
    }
    

    render() {
        return (
            <div className="Options container">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="hideClock" onChange={this.hideClock} checked={this.props.isClockHidden} ></input>
                    <label className="form-check-label" htmlFor="hideClock">
                        Masquer l'horloge
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="hideDate" onChange={this.hideDate} checked={this.props.isDateHidden} ></input>
                    <label className="form-check-label" htmlFor="hideDate">
                        Masquer la date
                    </label>
                </div>
            </div>
        );
    }
}

export default Options;