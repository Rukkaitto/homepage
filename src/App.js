import React, { Component } from 'react';
import { Clock } from './Clock'
import { DateComponent } from './DateComponent';
import Options from './Options';
import Arrows from './Arrows';
import Cookies from 'js-cookie'
import bg1 from './backgrounds/bg1.jpg'
import bg2 from './backgrounds/bg2.jpg'
import bg3 from './backgrounds/bg3.jpg'


const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

const bgs = [bg1, bg2, bg3]

class App extends Component {
  constructor(props) {
    super(props);
    if(!Cookies.get('options')) {
      this.state = {
        showOptions: false,
        options: {
          showClock: true,
          showDate: true,
          backgroundIndex: Math.floor(Math.random() * bgs.length),
        }
      }
    } else {
      this.state = {
        showOptions: false,
        options: Cookies.getJSON('options'),
      }
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
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        showClock: !this.state.options.showClock,
      }
    }))
  }

  hideDate() {
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        showDate: !this.state.options.showDate,
      }
    }))
  }

  previousBg() {
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        backgroundIndex: this.state.options.backgroundIndex - 1,
      }
    }))
  }

  nextBg() {
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        backgroundIndex: this.state.options.backgroundIndex + 1,
      }
    }))
  }

  render() {
    Cookies.set('options', JSON.stringify(this.state.options), {expires: 9999})

    const { backgroundIndex, showClock, showDate } = this.state.options

    return (
      <div className="App" style={{ backgroundImage: 'url(' + bgs[backgroundIndex % bgs.length] + ')' }}>

        <button className="btn btn-outline-light OptionsButton FadeIn SecondToFadeIn" onClick={this.manageOptions}>Options</button>
        {this.state.showOptions ? <Options hideClock={this.hideClock} hideDate={this.hideDate} isClockHidden={!showClock} isDateHidden={!showDate} /> : ''}


        <div className="Center">
          {showClock || showDate ? 
            <div className="ClockAndDate FadeIn FirstToFadeIn">
            {showClock ? <Clock /> : ''}
            {showDate ? <DateComponent days={days} months={months} /> : ''}
          </div> : ''}

        </div >
        <div className="FadeIn SecondToFadeIn">
          <Arrows handleNext={this.nextBg} handlePrevious={this.previousBg} />
        </div>

      </div>
    );
  };

}

export default App;
