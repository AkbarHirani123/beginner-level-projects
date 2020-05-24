import React, {Component} from 'react';
import countries from './Countries';

export class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0 ) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = countries.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    };

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }

    render() {
        const { text, suggestions } = this.state;
        return(
            <div className="container">
                <h2>Autocomplete</h2>
                <div className="autocomplete-container">
                    <h3>Type in the name of any country</h3>
                    <input id="query" type="text" onChange={this.onTextChange} value={text}/>
                    {this.renderSuggestions()}
                    <span>Suggestions: {suggestions.length}</span>
                </div>
                <p>
                    This was created using an instructional page but I will go into additional details.<br /><br />
                    <a href="https://www.golangprograms.com/react-js-projects-for-beginners/search-autocomplete-in-react-js.html" targed="blank" >Source</a>
                </p>
                <div className="lesson-container">
                    <h3>Lessons:</h3>
                    <p>Here, do not panic about the number of functions. Let's go throught them.</p>
                    <p className="code">onTextChange = (e) => &#123;<br />&nbsp;&nbsp;&nbsp;&nbsp;...<br />&#125;</p>
                    <p>This function has RegExp expressions which is a Regular Expression object declaration in JavaScript. test() is one of RegExp objects function.<br /><br />sort() and filter() are JavaScript functions.<br /><br />It's good to be aware of these functions.</p>
                    <p className="code">selectedText(value) &#123;<br />&nbsp;&nbsp;&nbsp;&nbsp;...<br />&#125;</p>
                    <p>This function simply selects the country that you select and empties the results</p>
                    <p className="code">renderSuggestions = () => &#123;<br />&nbsp;&nbsp;&nbsp;&nbsp;...<br />&#125;</p>
                    <p>This function runs every time the render function runs. Remember that the render functions runs every time you change the state using setState().<br /><br />Be sure to recall that you learned this in your CodeAcademy learnings.</p>
                    <p>Is it getting easier to understand react code? I hope so!</p>
                    <br /><hr /><br />
                    <p><strong>How about we move on to something more fun? Woohoo!<br /><br />Let's do some bootstrap in React lessons!</strong></p>
                </div>
            </div>
        );
    };
}