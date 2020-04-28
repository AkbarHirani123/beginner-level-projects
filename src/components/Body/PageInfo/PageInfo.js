import React, { Component } from 'react';


export class PageInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {prevPage : ""};
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.location !== this.props.location) {
            this.setState({prevPage: this.props.location})
        }
    }

    render() {
        let link = this.state.prevPage;
        if(link === ""){
            return (
                <div className="App-page-info">
                    <div className="greyinfo">
                        <div className="grey-text">Let's learn some React!</div>
                    </div>
                </div>
            );
        } else if (link === "page1") {
            return (
                <div className="App-page-info">
                    <div className="greyinfo">
                        <a href="/{link}" className="back-button">&#x2190; Back </a>
                        <div className="grey-text">Let's learn some React!</div>
                    </div>
                </div>
            );

        }
    }
}

export default PageInfo;