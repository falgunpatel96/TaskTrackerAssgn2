import React, { Component } from 'react'

import TeamDummyData from './TeamDummyData';
import { Dropdown, Card } from 'react-bootstrap';

import './CreateProject.css'
// import logo from '../../assets/tracker_icon.png';



export class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTeam: {},
            pname: '',
        }
    }

    inputHandler = (e) => {
        console.log("here")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmitted = (event) => {
        console.log(this.state);
        if (this.state.pname.trim().length === 0) {
            alert("Project name cannot be left blank!")
        } else if (this.state.selectedTeam.name === undefined) {
            alert("Please select the team fot the project!")
        } else {
            alert("Project created")
        }
    }


    getDropDownTeamNames = (data) => {
        // console.log("data:", data)
        return (
            <Dropdown.Item eventKey={data.id}>{data.name}</Dropdown.Item>
        )
    }

    onSearchOptionSelect = (id) => {
        const selectedTeam = TeamDummyData.find(e => e.id === Number(id))
        this.setState({ selectedTeam });
    }


    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 border rounded" >
                        <div className="container p-4">
                            <h3 className="text-center">Create Project</h3>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="pname" className="form-control  border" placeholder="Enter project name" onChange={this.inputHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Team</label>
                                <div className="row my-1">
                                    <div className="col-5 pl-0" >
                                        <Dropdown className="my-auto ml-2 drop-down" onSelect={this.onSearchOptionSelect}>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                {this.state.selectedTeam.name || 'Select Team'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="select" style={{ display: "none" }} disabled selected>Select Team</Dropdown.Item>
                                                {
                                                    TeamDummyData.length > 0 ?
                                                        TeamDummyData.map((data) =>
                                                            this.getDropDownTeamNames(data)
                                                        ) : null
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-7">
                                        {
                                            this.state.selectedTeam.name ? <Card>
                                                <div className="cardHeader text-center">
                                                    <h5>Team Members</h5>
                                                </div>
                                                <p className="text-center">{this.state.selectedTeam.members.map((name, index) => name + `${index !== this.state.selectedTeam.members.length - 1 ? ", " : "."}`)}</p>
                                            </Card> : null
                                        }
                                    </div>


                                </div>


                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control  border" aria-label="With textarea" placeholder="Enter project description" />
                            </div>

                            <button type="submit" onClick={this.formSubmitted} className="btn btn-primary btn-block">Create Project</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject
