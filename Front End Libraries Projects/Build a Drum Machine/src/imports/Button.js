import React from 'react';
var Sound = require('react-sound').default;

export class Button extends React.Component {
    componentWillMount(){
        var Button = this;
        document.addEventListener("keydown",(event) => {
            if (!this.props.assets.keyTrigger || !event.key) return;
            if (this.props.assets.keyTrigger.toLowerCase() === event.key.toLowerCase()) {
                Button.sound.sound.play();
                this.props.changeText(this.props.assets.id);
                
            }
        });

        document.addEventListener("click",(event) => {
            if (event.target.id === this.props.assets.id) {
                Button.sound.sound.play();
                this.props.changeText(this.props.assets.id);
            }
        });
    }
    render() {
        return(
            <div className="drum-pad" id={this.props.assets.id}>
                <button type="button" className="btn btn-primary" onClick={() => {this.sound.sound.play(); this.props.changeText(this.props.assets.id);} } onKeyPress={this.handleKeyPress}>{this.props.assets.keyTrigger.toUpperCase()}</button>
                <audio className="clip" id={this.props.assets.keyTrigger} src={this.props.assets.url} />
                <Sound ref={(instance) => this.sound = instance} url={this.props.assets.url}  playStatus={Sound.status.STOPPED}/>
            </div>
        );
    }
}