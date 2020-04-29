import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';

let styles = {
    margin: 'auto',
    width: '50%'
};
let imgStyles = {
    maxWidth: "100%"
};
/*const getConfigurableProps = () => ({
    showStatus: boolean('showStatus', false, 'Toggles'),
});*/

export class MyCarousel extends Component {
    render() {
        return (
            <div className="container">
                <h1>React Responsive Carousel</h1>
                <div style={styles}>
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} >
                        <div>
                            <img src="https://d.newsweek.com/en/full/1539977/hong-kong-victoria-harbor.jpg" alt="Hong Kong" style={imgStyles} />
                            <p className="legend">Hong Kong</p>
                        </div>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG" alt="Singapore" style={imgStyles} />
                            <p className="legend">Singapore</p>
                        </div>
                        <div>
                            <img src="https://resources.matcha-jp.com/original/2019/12/10-92630.jpeg" alt="Japan" style={imgStyles} />
                            <p className="legend">Japan</p>
                        </div>
                        <div>
                            <img src="https://steamuserimages-a.akamaihd.net/ugc/438323734761248386/C50D75EEDFC8701F61AE379683F3A43E9CF3F3AD/" alt="Las Vegas" style={imgStyles} />
                            <p className="legend">New York</p>
                        </div>
                    </Carousel>
                </div>
                <p>
                    This carousel was created using the React Responsive Carousel Package.<br /><br />
                    <a href="https://www.npmjs.com/package/react-responsive-carousel" targed="blank" >Source</a>
                </p>
            </div>
        );
    }
}

export default MyCarousel;