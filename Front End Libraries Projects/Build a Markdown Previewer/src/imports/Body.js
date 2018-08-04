import React from 'react';
import Preview from './Preview.js';
class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '# Welcome to my React Markdown Previewer!\n' +
                '\n' +
                '## This is a sub-heading...\n' +
                '### And here\'s some other cool stuff:\n' +
                '  \n' +
                'Heres some code, `<div></div>`, between 2 backticks.\n' +
                '\n' +
                '```\n' +
                '// this is multi-line code:\n' +
                '\n' +
                'function anotherExample(firstLine, lastLine) {\n' +
                '  if (firstLine == \'```\' && lastLine == \'```\') {\n' +
                '    return multiLineCode;\n' +
                '  }\n' +
                '}\n' +
                '```\n' +
                '  \n' +
                'You can also make text **bold**... whoa!\n' +
                'Or _italic_.\n' +
                'Or... wait for it... **_both!_**\n' +
                'And feel free to go crazy ~~crossing stuff out~~.\n' +
                '\n' +
                'There\'s also [links](https://www.freecodecamp.com), and\n' +
                '> Block Quotes!\n' +
                '\n' +
                'And if you want to get really crazy, even tables:\n' +
                '\n' +
                'Wild Header | Crazy Header | Another Header?\n' +
                '------------ | ------------- | ------------- \n' +
                'Your content can | be here, and it | can be here....\n' +
                'And here. | Okay. | I think we get it.\n' +
                '\n' +
                '- And of course there are lists.\n' +
                '  - Some are bulleted.\n' +
                '     - With different indentation levels.\n' +
                '        - That look like this.\n' +
                '\n' +
                '\n' +
                '1. And there are numbererd lists too.\n' +
                '1. Use just 1s if you want! \n' +
                '1. But the list goes on...\n' +
                '- Even if you use dashes or asterisks.\n' +
                '* And last but not least, let\'s not forget embedded images:\n' +
                '\n' +
                '![React Logo w/ Text](https://goo.gl/Umyytc)\n'
        }
        this.updateInputValue = this.updateInputValue.bind(this);
    }
    updateInputValue(evt) {
        this.setState({
            text: evt.target.value
        });
    }
    render() {
        return (
            <div className="container-fluid mt-3" style={{height: "100%"}}>
                <div className="row" style={{height: "100%"}}>
                    <div className="col" style={{height: "100%"}}>
                        <div className="container">  <textarea value={this.state.text}  className="form-control" id="editor" rows="30" style={{height: "100%"}} onChange={evt => this.updateInputValue(evt)}/> </div>
                    </div>
                    <div className="col" style={{height: "100%"}}>
                        <nav className="navbar navbar-light bg-color rounded">
                            <span className="navbar-brand mb-0 align-content-center">Preview</span>
                        </nav>
                        <Preview  text={this.state.text}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Body;
