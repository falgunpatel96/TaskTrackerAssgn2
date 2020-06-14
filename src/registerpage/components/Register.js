import React, { Component } from 'react'

import './Register.css'
import logo from '../../assets/tracker_icon.png';

export class Register extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center text-center">
                    <div>
                        <img src={logo} className='p-2' alt='TaskTrackerLogo' width='215' height='80' />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 border rounded" >
                        <form className="container p-4">
                            <h3 className="text-center">Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register
