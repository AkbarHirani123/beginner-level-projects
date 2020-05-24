import React, {Component} from 'react';

export class VotingSystem extends Component {
    constructor(props){
        super(props);
        //this.handleVote = this.handleVote.bind(this);
        this.state = {
            languages: [
                {name: "Php", votes: 0},
                {name: "Java", votes: 0},
                {name: "Pythos", votes: 0},
                {name: "JavaScript", votes: 0}
            ]
        }
    }
    
    handleVote (i) {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;
        this.setState({languages: newLanguages});
    }

    render() {
        return (
            <div className="container">
                <h1>Simple Voting App</h1>
                <div className="languages">
                    {
                        this.state.languages.map((lang, i) => 
                            <div className="language" key={i}>
                                <div className="voteCount">
                                    {lang.votes}
                                </div>
                                <div className="languageName">
                                    {lang.name}
                                </div>
                                <button className="voting-button" onClick={this.handleVote.bind(this, i)}> Vote +1</button>
                            </div>
                        )
                    }
                </div>
                <p>
                    This was created using an instructional page but I will go into additional details.<br /><br />
                    <a href="https://www.golangprograms.com/react-js-projects-for-beginners/how-to-create-voting-system-in-react-js.html" targed="blank" >Source</a>
                </p>
                <div className="lesson-container">
                    <h3>Lessons:</h3>
                    <p>This is a fix my mistake lesson. If you look at the link provided above and my code provided below, you'll notice that the bind function is not implemented correctly according to your lessons from CodeAcademy. This is not the best React programming practice according to your lesson.<br /><br />See if you can fix this code from what you've learned.</p><br /><hr /><br />
                    <p>First, create and open a React project.<br /> <br />Then, write a simple react component with a constructor and a render function.<br /> <br />Let's write the base of the html code in the render function.</p>
                    <p className="code">
                    {'render()'}&#123;<br />
&nbsp;&nbsp;{'return('}<br />
&nbsp;&nbsp;&nbsp;&nbsp;{'<>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<h1>Vote Your Language!</h1>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<div className="languages">'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'this.state.languages.map((lang, i) => '}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<div key='}&#123;i&#125;{' className="language">'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<div className="voteCount">'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'lang.votes'}&#125;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<div className="languageName">'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'lang.name'}&#125;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<button onClick='}&#123;{'this.vote.bind(this, i)'}&#125;{'>Click Here</button>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{')'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}<br />
&nbsp;&nbsp;&nbsp;&nbsp;{'</>'}<br />
&nbsp;&nbsp;{');'}<br />
&#125;
                    </p>
                    <p>'languages' is our state that will we modify which will contain the language name and votes for the coresponding language.</p>
                    <p>Now create the constructor</p>
                    <p className="code">
                    {'constructor(props)'}&#123;<br />
&nbsp;&nbsp;{'super(props);'}<br />
&nbsp;&nbsp;{'this.state = '}&#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;{'languages : ['}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'name: "Php", votes: 0'}&#125;{','}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'name: "Python", votes: 0'}&#125;{','}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'name: "Go", votes: 0'}&#125;{','}<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'name: "Java", votes: 0'}&#125;<br />
&nbsp;&nbsp;&nbsp;&nbsp;{']'}<br />&nbsp;&nbsp;&#125;<br />&#125;
                    </p>
                    <p>Next we need to make sure the vote function we're using in our render function is created. This function will be fired when you click the vote button.</p>                        
                    <p className="code">
                    {'vote (i) '}&#123;<br />
&nbsp;&nbsp;{'let newLanguages = [...this.state.languages];'}<br />
&nbsp;&nbsp;{'newLanguages[i].votes++;'}<br />
&nbsp;&nbsp;{'this.setState('}&#123;{'languages: newLanguages'}&#125;{');'}<br />
&#125;
                    </p>
                    <p>And you're done!</p>
                    <p>Here is the CSS for the component. It's different than the link. Feel free to change it at will</p>
                    <p className="code">
                    {'.languages '}&#123;<br />
&nbsp;&nbsp;{'height: 400px;'}<br />
&nbsp;&nbsp;{'width: 400px;'}<br />
&nbsp;&nbsp;{'margin: 10px auto;'}<br />
&nbsp;&nbsp;{'display: flex;'}<br />
&nbsp;&nbsp;{'flex-direction: column;'}<br />
  &#125;<br />
  <br />
{'.language '}&#123;<br />
&nbsp;&nbsp;{'flex: 1;'}<br />
&nbsp;&nbsp;{'display: flex;'}<br />
&nbsp;&nbsp;{'justify-content: space-between;'}<br />
&nbsp;&nbsp;{'align-items: center;'}<br />
&nbsp;&nbsp;{'padding: 10px 40px;'}<br />
&nbsp;&nbsp;{'background-color: #f8faff;'}<br />
&nbsp;&nbsp;{'border: 1px solid #222;'}<br />
&nbsp;&nbsp;{'margin: 2px;'}<br />
&#125;<br />
<br />
{'.voteCount '}&#123;<br />
&nbsp;&nbsp;{'border-radius: 50%;'}<br />
&nbsp;&nbsp;{'display: flex;'}<br />
&nbsp;&nbsp;{'justify-content: center;'}<br />
&nbsp;&nbsp;{'align-items: center;'}<br />
&#125;<br />
<br />
{'.language button &#123;'}<br />
&nbsp;&nbsp;{'color: green;'}<br />
&nbsp;&nbsp;{'background-color: #fff;'}<br />
&nbsp;&nbsp;{'border: 1px solid green;'}<br />
&nbsp;&nbsp;{'padding: 9px 20px;'}<br />
&nbsp;&nbsp;{'border-radius: 3px;'}<br />
&nbsp;&nbsp;{'font-size: 18px;'}<br />
&nbsp;&nbsp;{'text-transform: lowercase;'}<br />
&nbsp;&nbsp;{'letter-spacing: 1px;'}<br />
&nbsp;&nbsp;{'font-weight: 600;'}<br />
&#125;<br />
<br />
{'.language button:hover '}&#123;<br />
&nbsp;&nbsp;{'box-shadow: 1px 2px 6px rgba(0,0,0,.2);'}<br />
&#125;<br />

                    </p>
                </div>
            </div>
        );
    } 
}