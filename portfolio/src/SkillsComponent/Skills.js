import React from "react";
import angular from '../angular.png';
import nodeJs from "../nodejs.svg";
import npm from "../npm.png";
import reactLogo from "../react.png"
import bootstrapLogo from "../bootstrap.png"
import jqueryLogo from '../jquery.png'
import "./Skills.scss"


export class Skills extends React.Component{
    constructor(){
        super();
    }
    render(){
        let icons = [angular,reactLogo,bootstrapLogo,jqueryLogo,nodeJs,npm];
        let iconsImg = icons.map((icon,index)=>{
            return (
                <div key={index} className="skills-experience__icons__container">
                    <img className="skills-experience__icon" src={icon}></img>
                </div>
            )
        })
        return (
            <div className="skills-experience u-padding-16">
                <div className="skills-experience__header">
                    Skills & Experience
                </div>
                <div className="skills-experience__icons">
                    {iconsImg}
                </div>
            </div>
        )
    }
}

export default Skills;