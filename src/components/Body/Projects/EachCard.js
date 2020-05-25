import React, { Component } from 'react';
  
export default class EachCard extends Component {
    render() {
        return (
            <div className="card card-style shadow">
                <img src={this.props.obj.imageURL} alt={this.props.obj.title} className="card-img"/>
                <div className="card-body">
                    <h4 className="card-title">{this.props.obj.title}</h4>
                    <p className="card-text text-secondary">{this.props.obj.body}</p>
                    <a href="" className="card-link">learn more</a>
                </div>
            </div>
        );
    }
}