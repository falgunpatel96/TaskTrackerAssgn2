import React from 'react';
import './LandingPage.css';

//importing images
import OrganizePro from '../../assets/undraw_Organizing_projects.svg';
import ScrumBoard from '../../assets/undraw_scrum_board.svg';
import TrackProgress from '../../assets/undraw_project_completed.svg';
import Analysis from '../../assets/undraw_growth_analytics.svg';

export default class LandingPage extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className=" col-sm-7">
                        <img src={OrganizePro} className="illustrations" alt="Organize Projects"/>
                    </div>
                    <div className="col-sm-5 body-content">
                        <h4>One Place</h4>
                        <p>One place to organize all your projects concurrently and easily</p>
                        
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className=" col-sm-7 order-sm-last">
                        <img className="illustrations" src={ScrumBoard} alt="Scrum Board" />
                    </div>
                    <div className=" col-sm-5 order-sm-first">
                        <h4>Plan</h4>
                        <p>make user stories, plan sprints and distribute task accross team</p>
                        <h4>Collobrate</h4>
                        <p>make communication transparent and easy</p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className=" col-sm-7">
                        <img src={TrackProgress} className="illustrations" alt="Track Progress" />
                    </div>
                    <div className=" col-sm-5">
                        <h4>Track</h4>
                        <p>Track your teams progress in project and work done</p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-sm-7 order-sm-last">
                        <img src={Analysis} className="illustrations" alt="Graphical Analysis" />
                    </div>    
                    <div className=" col-sm-5 order-sm-first">
                    <h4>Analyze</h4>
                    <p>grphical tools to improve your analysis and findings</p>
                    </div>
                </div>

            </div>
        );
    }
}