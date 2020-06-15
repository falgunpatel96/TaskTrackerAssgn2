import React, { Component } from 'react'
import { withRouter} from "react-router";
import { Redirect } from 'react-router-dom'

// import './Register.css'
import './Login.css'
import logo from '../../assets/tracker_icon.png';

 

export class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    inputHandler = (e) => {
        // console.log("here")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmitted = (event) => {
        console.log(this.state);
        if (this.state.email.trim().length === 0 || this.state.password.trim().length === 0) {
            alert("please fill the required fields")
        }
        else {
            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
                if (this.state.password.length < 6) {
                    alert("Password length need to be more than 6")
                }
                else { 
                    alert("Login Successful") 
                    this.setState({
                        ...this.state,
                        redirect: true
                    })
                }
            }
            else {
                alert("Invalid Email!") 
            }
        }
    }

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
                        <div className="container p-4">
                            <h3 className="text-center">Log In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" className="form-control  border" placeholder="Enter email" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control border" placeholder="Enter password" onChange={this.inputHandler}/>
                            </div>

                            <button type="submit" onClick={this.formSubmitted} className="btn btn-primary btn-block">Log In</button>
                            <p className="forgot-password text-right">
                                Not registered <a href="/register">sign up?</a>
                            </p>
                        </div>
                    </div>
                </div>
                {
                    this.state.redirect && <Redirect to="/myproject" from="/login"/>
                }
            </div>
        );
    }
}

export default withRouter(Register);
