import React, { Component } from 'react';
import {Clock} from './Clock'
import { DateComponent } from './DateComponent';
import Options from './Options';
import Arrows from './Arrows';
import bg1 from './backgrounds/bg1.jpg'
import bg2 from './backgrounds/bg2.jpg'
import bg3 from './backgrounds/bg3.jpg'


const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

const bgs = [bg1, bg2, bg3]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      showClock: true,
      showDate: true,
      backgroundIndex: 0,
    }

    this.manageOptions = this.manageOptions.bind(this)
    this.hideClock = this.hideClock.bind(this)
    this.hideDate = this.hideDate.bind(this)
    this.previousBg = this.previousBg.bind(this)
    this.nextBg = this.nextBg.bind(this)

  }
  
  manageOptions() {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  }

  hideClock() {
    this.setState({
      showClock: !this.state.showClock,
    });
  }

  hideDate() {
    this.setState({
      showDate: !this.state.showDate,
    });
  }

  previousBg() {
    if(this.state.backgroundIndex - 1 >= 0 && this.state.backgroundIndex - 1 < bgs.length) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex - 1, 
      });
    }
    
  }

  nextBg() {
    if(this.state.backgroundIndex + 1 >= 0 && this.state.backgroundIndex + 1 < bgs.length) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1, 
      });
    }
  }

  render() {
    const {backgroundIndex} = this.state

    return (
      <div className="App" style={{backgroundImage: 'url('+bgs[backgroundIndex]+')'}}>
        <button className="OptionsButton btn btn-outline-light" onClick={this.manageOptions}>Options</button>
        {this.state.showOptions ? <Options hideClock={this.hideClock} hideDate={this.hideDate} isClockHidden={!this.state.showClock} isDateHidden={!this.state.showDate}/> : ''}
        <div className="Center">
          <div className="ClockAndDate">
            {this.state.showClock ? <Clock /> : ''}
            {this.state.showDate ? <DateComponent days={days} months={months} /> : ''}
          </div>
          
        </div>
        <Arrows handleNext={this.nextBg} handlePrevious={this.previousBg}/>
      </div>
    );
  };
  
}

export default App;
