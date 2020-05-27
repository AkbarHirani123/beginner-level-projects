import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Body/Home/Home';
import ProjectHome from './components/Body/Projects/ProjectHome';
import DemoFullSite from './components/Body/Projects/DemoFullSite';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects/:projectId" component={ProjectHome} />
                    <Route path="/demo-full-site" component={DemoFullSite} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;