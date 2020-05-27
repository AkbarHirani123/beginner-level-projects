import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class BootstrapSite extends Component {
    render() {
        return (
            <div className="container">
                <h2>Full Site Bootstrap</h2>
                <Link to='/demo-full-site'><button className="btn btn-primary btn-lg">Demo Full Site</button></Link>

            </div>
        );
    }
}