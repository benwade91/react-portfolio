import React from 'react';
import simpleSuds from "../../images/SimpleSuds.png";
import iCycle from "../../images/icycle.png";
import employeeManager from "../../images/employeemngr.png";
import noteTaker from "../../images/notetaker.png";
import weatherDash from "../../images/weather.png";
import blogger from '../../images/blog.png'
import './style.css';

const projects = [
    {
        name: 'SimpleSuds',
        description: 'SimpleSuds connects customers to local laundromats that will pick up and return laundry clean, ironed, and folded. Customer can create accounts and place orders and Laudromat as admin can update the order.',
        photoSrc: simpleSuds,
        url: 'https://simple-suds.herokuapp.com/',
        repo: 'https://github.com/bhumisha/laundromat',
        role: 'This was a group project using MVC. My role was the frontend development. I used Handlebars.JS to template the HTML and combined it with Bootstrap and vanilla CSS.'
    },
    {
        name: 'iCycle',
        description: 'With iCycle, a user can search for a city or zip code and find out how many bicycle-related thefts, accidents, and potential road hazards have been reported within a 10-mile radius of that searched area.',
        photoSrc: iCycle,
        url: 'https://ohwhytina.github.io/iCycle/',
        repo: 'https://github.com/ohwhytina/iCycle',
        role: 'This was a group project where my role was to build the API functionality. I combined the GoogleMaps API with geographic locations of "incidents" from the Bikewise API.'
    },
    {
        name: 'Employee Manager',
        description: 'This app is built to be an employee management system. The app leverages a MySQL database to store and keep trach of a work force, while also customizable. While using the app, you can create and remove employees, create job roles, and departments, look up employees by manager and more.',
        photoSrc: employeeManager,
        repo: 'https://github.com/benwade91/Employee-Manager'
    },
    {
        name: 'Note Taker',
        description: 'The app is meant to help the user create and manage notes. It stored all the information on a server app so the notes can be accesed from anywhere.',
        photoSrc: noteTaker,
        repo: 'https://github.com/benwade91/my-note'
    },
    {
        name: 'Weather Dash',
        description: 'This app is used to fetch weather information from the openweathermap.org API and display said information on the home page. The app uses the "One Call API" and the "5 Day/ 3 Hour Forecast" APIs to gather the data needed. The dashboard also uses the local storage to store previous searches and display them for later calls.',
        photoSrc: weatherDash,
        url: 'https://benwade91.github.io/Weather-Dashboard/',
        repo: 'https://github.com/benwade91/Weather-Dashboard'
    },
    {
        name: 'Blogger',
        description: `Blogger is a simple app used to make blog posts. Users can sign-up with their email and a username to begin. Users can create, edit and delete their posts, as well as comment on other user's blog posts.`,
        photoSrc: blogger,
        url: 'https://bens-blogger.herokuapp.com/',
        repo: 'https://github.com/benwade91/Blogger'
    }
]

const Project = () => {
    return (<main className='projects'>
        <div className='parent'>
            {projects.map(project => (
                <section key={project.name} className='content'>
                    <div className='title'>
                        <h3>{project.name}</h3>
                    </div>
                    <div className="flip-card projectCrd">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={project.photoSrc} alt="Avatar" />
                            </div>
                            <div className="flip-card-back">
                                <p>{project.description}</p>
                                <div>
                                    {(project.url) && <a href={project.url}>Deployed App</a>}
                                </div>
                                <div>
                                    <a href={project.repo}>Github Repo</a>
                                </div>
                                {project.role&&<p>{project.role}</p>}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

        </div>
    </main>)
}


export default Project;