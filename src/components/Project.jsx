import React from 'react';

const Project = () => {
    return (
        <section id="work" className="content">
        <div className="title">
            <h3>Projects</h3>
        </div>
        <div className="theGrid">
            <div className="gridItem1 gridItem">
                <a href="https://simple-suds.herokuapp.com/">
                    <img src="./assets/newPhotos/SimpleSuds.png" alt="SimpleSuds" />
                    <p>SimpleSuds</p>
                </a>
                <label htmlFor="SimpleSuds">HandlebarsJS, HTML, CSS, Bootstrap</label>
            </div>
            <div className="gridItem2 gridItem">
                <a href="https://ohwhytina.github.io/iCycle/">
                    <img src="./assets/newPhotos/icycle.png" alt="iCycle" />
                    <p>iCycle</p>
                </a>
                <label htmlFor="iCycle">GoogleMaps API, JavaScript, jQuery</label>
            </div>
            <div className="gridItem3 gridItem">
                <a href="https://github.com/benwade91/Employee-Manager">
                    <img src="./assets/newPhotos/employeemngr.png" alt="Employee Manager" />
                    <p>Employee Manager</p>
                </a>
                <label htmlFor="Employee Manager">InquirerJS, Mysql2, Node</label>
            </div>
            <div className="gridItem4 gridItem">
                <a href="https://my-notes-1025.herokuapp.com/">
                    <img src="./assets/newPhotos/notetaker.png" alt="Note Taker" />
                    <p>Note Taker</p>
                </a>
                <label htmlFor="Note Taker">EspressJS, JavaScript</label>
            </div>
            <div className="gridItem5 gridItem">
                <a href="https://benwade91.github.io/Weather-Dashboard/">
                    <img src="./assets/newPhotos/weather.png" alt="Weather Dashboard" />
                    <p>Weather Dashboard</p>
                </a>
                <label htmlFor="Weather Dashboard">WeatherAPI, JavaScript</label>
            </div>
        </div>
    </section>)
}


export default Project;