import React from "react";
// import angular from 'assets/angular.png';
// import nodeJs from "assets/nodejs.svg";
// import npm from "assets/npm.png";
// import reactLogo from "assets/react.png"
// import bootstrapLogo from "assets/bootstrap.png"
// import jqueryLogo from 'assets/jquery.png'
import "./Skills.scss"


export default function Skills() {
    const icons = [ "assets/angular.png",
        "assets/react.png",
        "assets/bootstrap.png",
        "assets/jquery.png",
        "assets/nodejs.svg",
        "assets/npm.png"
    ];

    return (
        <div className="skills-experience u-padding-16">
            <div className="skills-experience__header">
                Skills & Experience
            </div>
            <div className="skills-experience__icons">
                {icons.map((icon, index) => {
                    return (
                        <div key={index} className="skills-experience__icons__container">
                            <img className="skills-experience__icon" src={icon}></img>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

