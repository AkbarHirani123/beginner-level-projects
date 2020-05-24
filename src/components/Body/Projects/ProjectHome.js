import React, {Component} from 'react';
import Home from '../Home/Home'
import PageInfo from '../PageInfo/PageInfo';
import { MyCarousel } from './Carousel';
import { VotingSystem } from './VotingSystem';
import { AutoComplete } from './AutoComplete';
import { BootstrapNav } from './BootstrapNav';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class ProjectHome extends Component {
    render() {
        if(this.props.match.params.projectId === "project-1-carousel") {
            return (
                <div>
                    <PageInfo name="Carousel" />
                    <div className="App-body">
                        <MyCarousel />
                    </div>
                </div>
            );
        } else if(this.props.match.params.projectId === "project-2-voting-system") {
            return (
                <div>
                    <PageInfo name="Voting System" />
                    <div className="App-body">
                        <VotingSystem />
                    </div>
                </div>
            );
        } else if(this.props.match.params.projectId === "project-3-autocomplete") {
            return (
                <div>
                    <PageInfo name="Autocomplete" />
                    <div className="App-body">
                        <AutoComplete />
                    </div>
                </div>
            );
        } else if(this.props.match.params.projectId === "project-4-nav") {
            return (
                <div>
                    <PageInfo name="Bootstrap Nav" />
                    <div className="App-body">
                        <BootstrapNav />
                    </div>
                </div>
            );
        } else {
            return <Home/>;
        }
    }
}