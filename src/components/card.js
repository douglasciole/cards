import React, { Component } from 'react'

export default class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Use this one"
        }
    }

    render() {
        const textToClipboard = (text) => {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            
            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
          
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
          
            try {
              var successful = document.execCommand('copy');
              var msg = successful ? 'successful' : 'unsuccessful';
              
              this.setState({buttonText: "Ctrl + C, Done!"});
              setTimeout(() => { 
                this.setState({buttonText: "Use this one"});
              }, 1500);
            } catch (err) {
              console.error('Fallback: Oops, unable to copy', err);
            }
          
            document.body.removeChild(textArea);
        }

        return (
            <div className="card">
                <div className="card-title">{this.props.label}</div>
                <img className="card-image" src={this.props.image} />
                <button onClick={() => { textToClipboard(this.props.refer); }} className="card-button">{this.state.buttonText}</button>
            </div>
        )
    }
}
