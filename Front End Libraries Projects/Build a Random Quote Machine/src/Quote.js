import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Quote.css';
import { Share } from 'react-twitter-widgets'

class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
        this.fetchQuote = this.fetchQuote.bind(this);
    }
    componentDidMount() {
        this.fetchQuote();
    }
    fetchQuote(){
        fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?count=1", {
            headers: {
                'X-Mashape-Key': 'cN4VEo5egYmshgNcT3TjgiEBrV4op1rs9KujsndObk7dfQMM2g',
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        quote: result[0].quote,
                        author: result[0].author
                    })
                },
                (error) => {
                    this.setState({
                        quote: "Error",
                        author: "Error"
                    })
                }
            )
    }
    render() {
    return (
        <div>

            <div className="container d-flex h-100 mt-5" id="quote-box">
                <div className="row justify-content-center align-self-center">
                    <div className="jumbotron">
                        <h1 className="display-4">Random Quote Of The Day</h1>
                        <p className="lead">This page will display a random quote every time you refresh it. API is provided by <a href="https://market.mashape.com/andruxnet/random-famous-quotes">Mashape</a> and the front-end is done using React.</p>
                        <p><a href="https://github.com/Fyris">Github</a></p>
                        <hr className="my-4" />
                        <blockquote className="blockquote text-center">
                            <p className="mb-0" id="text">{this.state.quote}</p>
                            <footer className="blockquote-footer" id="author">{this.state.author}</footer>
                        <br />
                        <button className="btn text-center" id="new-quote" onClick={this.fetchQuote}>New Quote</button>
                        </blockquote>
                        <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                        <Share url="test"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Quote;
