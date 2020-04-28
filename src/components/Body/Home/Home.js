import React, { Component } from 'react';
import PageInfo from '../PageInfo/PageInfo';
import PageBody from '../PageBody/PageBody';


export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {prevPage : ""};
    }

    render() {
        return (
            <div >
                <PageInfo />
                <PageBody />
            </div>
        );
    }
}

export default Home;