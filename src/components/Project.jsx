import React from 'react';
import simpleSuds from "../images/SimpleSuds.png";
import iCycle from "../images/icycle.png";
import employeeManager from "../images/employeemngr.png";
import noteTaker from "../images/notetaker.png";
import weatherDash from "../images/weather.png";

const Project = () => {
    return (
        <section id="work" className="content">
        <div className="title">
            <h3>Projects</h3>
        </div>
        <div className="theGrid">
            <div className="gridItem1 gridItem">
                <a href="https://simple-suds.herokuapp.com/">
                    <img src={simpleSuds} alt="SimpleSuds" />
                    <p>SimpleSuds</p>
                </a>
                <label htmlFor="SimpleSuds">HandlebarsJS, HTML, CSS, Bootstrap</label>
            </div>
            <div className="gridItem2 gridItem">
                <a href="https://ohwhytina.github.io/iCycle/">
                    <img src={iCycle} alt="iCycle" />
                    <p>iCycle</p>
                </a>
                <label htmlFor="iCycle">GoogleMaps API, JavaScript, jQuery</label>
            </div>
            <div className="gridItem3 gridItem">
                <a href="https://github.com/benwade91/Employee-Manager">
                    <img src={employeeManager} alt="Employee Manager" />
                    <p>Employee Manager</p>
                </a>
                <label htmlFor="Employee Manager">InquirerJS, Mysql2, Node</label>
            </div>
            <div className="gridItem4 gridItem">
                <a href="https://my-notes-1025.herokuapp.com/">
                    <img src={noteTaker} alt="Note Taker" />
                    <p>Note Taker</p>
                </a>
                <label htmlFor="Note Taker">EspressJS, JavaScript</label>
            </div>
            <div className="gridItem5 gridItem">
                <a href="https://benwade91.github.io/Weather-Dashboard/">
                    <img src={weatherDash} alt="Weather Dashboard" />
                    <p>Weather Dashboard</p>
                </a>
                <label htmlFor="Weather Dashboard">WeatherAPI, JavaScript</label>
            </div>
        </div>
    </section>)
}


export default Project;