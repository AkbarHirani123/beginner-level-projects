import React, {Component} from 'react';
import EachCard from './EachCard';

const cardObj1 = {
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "imageURL": "https://picsum.photos/500/400"
};

const cardObj2 = {
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "imageURL": "https://picsum.photos/500/400?grayscale"
};

const cardObj3 = {
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "imageURL": "https://picsum.photos/500/400?blur"
};


export class BootstrapCards extends Component {
    render() {
        return (
            <div className="container">
                <h2>Bootstrap Cards</h2>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <EachCard obj={cardObj1} />
                        </div>
                        <div className="col-md-4">
                            <EachCard obj={cardObj2} />
                        </div>
                        <div className="col-md-4">
                            <EachCard obj={cardObj3} />
                        </div>
                    </div>
                </div>
                <div className="lesson-container">
                    <h3>Lessons:</h3>
                    <p>Now we're getting to the fun stuff!<br /><br /> I've just made a smiple card layout in something like 20 minutes. Honestly, the hardest part ws finding the content!</p>
                    <p>How did I made the cards? I wanted to separate my container and my cards.<br />Let's look at the card first.</p>
                    <p className="code">
                        {'<div className="card card-style shadow">'}<br />
                        &nbsp;&nbsp;{'<img src='}&#123;{'this.props.obj.imageURL'}&#125;{' alt='}&#123;{'this.props.obj.title'}&#125;{' className="card-img"/>'}<br />
                        &nbsp;&nbsp;{'<div className="card-body">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<h4 className="card-title">'}&#123;{'this.props.obj.title'}&#125;{'</h4>'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<p className="card-text text-secondary">'}&#123;{'this.props.obj.body'}&#125;{'</p>'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<a href="" className="card-link">learn more</a>'}<br />
                        &nbsp;&nbsp;{'</div>'}<br />
                        {'</div>'}'
                    </p>
                    <p>I had 2 choices here to make cards. I could've used the code above which basically used the bootstrap styles or I could've used card component from bootstrap.</p>
                    <p>How would I have used that? Let me show you.</p>
                    <p className="code">
                        {'<Card className="shadow">'}<br />
                        &nbsp;&nbsp;...<br />
                        {'</Card>'}
                    </p>
                    <p>Most of the code would've been the same. I would've had to use a Card component link my example above and importing the component from the react-bootstrap library. <br/><br/>Recall that this is called a Presentational Component.</p>
                    <br/><hr/><br/>
                    <p>Next, was the Container compornent.</p>
                    <p className="code">
                        {'<div className="container-fluid">'}<br />
                        &nbsp;&nbsp;{'<div className="row justify-content-center">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<div className="col-md-4">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<EachCard obj='}&#123;{'cardObj1'}&#125;{' />'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<div className="col-md-4">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<EachCard obj='}&#123;{'cardObj2'}&#125;{' />'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'<div className="col-md-4">'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<EachCard obj='}&#123;{'cardObj3'}&#125;{' />'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
                        &nbsp;&nbsp;{'</div>'}<br />
                        {'</div>'}'
                    </p>
                    <p>I simply utilized the existing bootstrap classes to create the card container. <br /><br />Notice how I made an object for each card content. It's just to make things easy for myself.</p>

                </div>
            </div>
        );
    }
}