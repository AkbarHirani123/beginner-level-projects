import React, {Component} from 'react';

export class VotingSystem extends Component {
    constructor(props){
        super(props);
        //this.handleVote = this.handleVote.bind(this);
        this.state = {
            languages: [
                {name: "Php", votes: 0},
                {name: "Java", votes: 0},
                {name: "Pythos", votes: 0},
                {name: "JavaScript", votes: 0}
            ]
        }
    }
    
    handleVote (i) {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;
        this.setState({languages: newLanguages});
    }

    render() {
        return (
            <div className="container">
                <h1>Simple Voting App</h1>
                <div className="languages">
                    {
                        this.state.languages.map((lang, i) => 
                            <div className="language" key={i}>
                                <div className="voteCount">
                                    {lang.votes}
                                </div>
                                <div className="languageName">
                                    {lang.name}
                                </div>
                                <button className="voting-button" onClick={this.handleVote.bind(this, i)}> Vote +1</button>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    } 
}