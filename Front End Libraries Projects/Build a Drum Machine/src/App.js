import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import {Button} from './imports/Button';
import {TextBox} from './imports/TextBox';

// FreeCodeCamp notes
const notes = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];



class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div id="drum-machine">
        <div className="container center-screen " >
            <div className="row">
                <div className="col text-center">
                    <Button assets={notes[0]} changeText={this.changeText} parent={this} />
                </div>
                <div className="col text-center">
                    <Button assets={notes[1]} changeText={this.changeText} parent={this} />
                </div>
                <div className="col  text-center">
                    <Button assets={notes[2]} changeText={this.changeText} parent={this}/>
                </div>
            </div>
            <div className="row">
                <div className="col  text-center">
                    <Button assets={notes[3]} changeText={this.changeText} parent={this}/>
                </div>
                <div className="col  text-center">
                    <Button assets={notes[4]} changeText={this.changeText} parent={this} />
                </div>
                <div className="col  text-center">
                    <Button assets={notes[5]} changeText={this.changeText} parent={this}/>
                </div>
            </div>
            <div className="row">
                <div className="col  text-center">
                    <Button assets={notes[6]} changeText={this.changeText} parent={this}/>
                </div>
                <div className="col  text-center">
                    <Button assets={notes[7]} changeText={this.changeText} parent={this}/>
                </div>
                <div className="col  text-center">
                    <Button assets={notes[8]} changeText={this.changeText} parent={this}/>
                </div>
            </div>

          <div className="row">
              <div className="text-box">
                  <TextBox ref={ref => { this.child = ref;} }  />
              </div>
          </div>
        </div>


        </div>
    );
  }
  changeText(text) {
        this.parent.child.changeText(text);
    }
}

export default App;
