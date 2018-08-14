import React from 'react';

export class TextBox extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { text: '-' };
    }
    changeText(text) {
        this.setState({ text: text})
    }
    render() {
        return(
            <div className="text-box">
                <p id="display">{this.state.text}</p>
            </div>
        );
    }
}