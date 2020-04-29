import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageInfo from '../PageInfo/PageInfo';


export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {prevPage : ""};
    }

    render() {
        return (
            <div >
                <PageInfo />
                <div className="App-body">
                    <h1>Intro</h1>
                    <div className="container">
                        <h4>Prerequisite</h4>
                        <p>There is a prerequisite for these projects. </p>
                        <p>Some basic structure, functions, features, and other useful information will definitely help. </p>
                        <strong>Here are some helpful resources:</strong>
                        <ol>
                            <li><a href="https://www.codecademy.com/search?query=reactjs">CodeAcademy</a> (this is where I learned the basics)</li>
                            <li><a href="https://reactjs.org/tutorial/tutorial.html">ReactJS Official Site</a> (direct from the source)</li>
                            <li><a href="https://lmgtfy.com/?q=learn+react">Google</a></li>
                        </ol>
                    </div>
                    <hr />
                    <div className="container">
                        <h4>Projects</h4>
                        <p>After you learn some React, try out these projects!</p>
                        <strong>Beginner Projects:</strong>
                        <ol>
                            <li><Link to='/projects/project-1-carousel'>Project 1 - Carousel</Link></li>
                            <li><Link to='/projects/project-2-carousel'>Project 2 - Carousel</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;