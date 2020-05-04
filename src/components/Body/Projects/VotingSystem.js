import React, {Component} from 'react';

export class VotingSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                {name: "Php", votes: 0},
                {name: "Java", votes: 0},
                {name: "Pythos", votes: 0},
                {name: "JavaScript", votes: 0}
            ]
        }
    }

    handleVote(i) {
        
    }
    render() {
        return (
            <div className="container">
                <h1>Simple Voting App</h1>

            </div>
        );
    }
}