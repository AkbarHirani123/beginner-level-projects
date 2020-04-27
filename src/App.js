import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageInfo from './components/PageInfo/PageInfo';
import PageBody from './components/PageBody/PageBody';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <PageInfo />
            <PageBody />
            <Footer />
        </div>
    );
  }
}

export default App;