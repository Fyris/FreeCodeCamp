import React from 'react';
import marked from 'marked';
class Preview extends React.Component {
    getMarkdownText() {
        marked.setOptions({ "linksInNewTab" : true });
        var rawMarkup = marked(this.props.text, {sanitize: true});
        return { __html: rawMarkup };
    }
    render() {
        return <div  id="preview" className="preview rounded" dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
}
export default Preview;
