import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Error extends Component {
    render() {
        return (
            <div className="row m-0 p-4 h-100" style={{ alignItems: 'center' }}>
                <div className="col col-lg-6 mx-auto">
                    <div className="d-flex card">
                        <div className="card-body">

                            <div>Oops Something went wrong</div>
                            <div>Error Code</div>
                            <div style={{fontSize: '48px', fontWeight:'500'}}>404</div>
                            <NavLink to="/" className="btn btn-sm btn-primary pxx-4">Go Back Home</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error
