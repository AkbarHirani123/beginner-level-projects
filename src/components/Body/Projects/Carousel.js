import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';

let styles = {
    margin: 'auto',
    width: '80%'
};
let imgStyles = {
    maxWidth: "100%"
};

export class MyCarousel extends Component {
    render() {
        return (
            <div className="container">
                <h3>Carousel</h3>
                <div style={styles}>
                    <Carousel>
                        <div>
                            <img src="https://d.newsweek.com/en/full/1539977/hong-kong-victoria-harbor.jpg" alt="Hong Kong" style={imgStyles} />
                            <p className="legend">Hong Kong</p>
                        </div>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG" alt="Singapore" style={imgStyles} />
                            <p className="legend"></p>
                        </div>
                        <div>
                            <img src="https://resources.matcha-jp.com/original/2019/12/10-92630.jpeg" alt="Japan" style={imgStyles} />
                            <p className="legend">Japan</p>
                        </div>
                        <div>
                            <img src="https://steamuserimages-a.akamaihd.net/ugc/438323734761248386/C50D75EEDFC8701F61AE379683F3A43E9CF3F3AD/" alt="Las Vegas" style={imgStyles} />
                            <p className="legend">Las Vegas</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default MyCarousel;