import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import '../AllBodyStyles.css';

export function BackButton({ children }) {
    let history = useHistory()
    return (
        <button type="button" onClick={() => history.goBack()} className="back-button" >
            Back
        </button>
    )
};

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  
    render() {
        return null;
    }
}
  
  

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
        let name = this.props.name;
        if(name === undefined){
            return (
                <div className="App-page-info">
                    <ScrollToTopOnMount />
                    <div className="greyinfo">
                        <div className="grey-text">Let's learn some React!</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App-page-info">
                    <ScrollToTopOnMount />
                    <div className="greyinfo">
                        <BackButton />
                        <div className="grey-text">{name}</div>
                    </div>
                </div>
            );
        }
    }
};

export default PageInfo;