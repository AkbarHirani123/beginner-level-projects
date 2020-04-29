import React, {Component} from 'react';
import Home from '../Home/Home'
import PageInfo from '../PageInfo/PageInfo';
import { MyCarousel, GoogleMapLoader } from './Carousel';
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
        } else if(this.props.match.params.projectId === "project-2") {
            return (
                <div>
                    <PageInfo name="Google Maps" />
                    <div className="App-body">
                        <GoogleMapLoader />
                    </div>
                </div>
            );
        } else {
            return <Home/>;
        }
    }
}