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
                <h2>React Responsive Carousel</h2>
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
                <div className="lesson-container">
                    <h3>Lessons:</h3>
                    <p>First, create and open a React project. Open command prompt to install the React Responsive Carousel Package.</p>
                    <p className="code">npm i react-responsive-carousel</p>
                    <p>Import the necessary component and css files from the imported package into your file.</p>
                    <p className="code">import &#123; Carousel &#125; from 'react-responsive-carousel';<br/>
                        import "react-responsive-carousel/lib/styles/carousel.min.css";</p>
                    <p>Write the carousel component into the return of your render function. Use the following format.</p>
                    <p className="code">
                    {"<Carousel>"}<br />&nbsp;&nbsp;{"<div>"}<br />&nbsp;&nbsp;&nbsp;&nbsp;{"<img src=\"image1 src\" alt=\"Image 1 Alt\" />"}<br />&nbsp;&nbsp;&nbsp;&nbsp;{"<p className=\"legend\">Image 1 text</p>"}<br />&nbsp;&nbsp;{"</div>"}
                    <br />&nbsp;&nbsp;{"<div>"}<br />&nbsp;&nbsp;&nbsp;&nbsp;{"<img src=\"image2 src\" alt=\"Image 2 Alt\" />"}<br />&nbsp;&nbsp;&nbsp;&nbsp;{"<p className=\"legend\">Image 2 text</p>"}<br />&nbsp;&nbsp;{"</div>"}<br />{"<Carousel>"}
                    </p>
                    <p>And you're done!<br /><br />If you want to make any changes to this carousel, check the source above this lesson for an advanced documentation from the creators of this useful library.</p>
                </div>
            </div>
        );
    }
}

export default MyCarousel;