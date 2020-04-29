import React, {Component} from 'react';
import Home from '../Home/Home'
import PageInfo from '../PageInfo/PageInfo';
import { MyCarousel } from '../Projects/Carousel';
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
        } else {
            return <Home/>;
        }
    }
}