import React from "react";
import ProjectCard from "./ProjectCardComponent/ProjectCard";
import "./Projects.scss";

export class Projects extends React.Component{
    constructor(){
        super();
        this.state={
            projects:[
                {
                    "title":"DBS SME Webpage",
                    "desc":"Developed and maintained reusable components using angular and integrated those components into a liferay application.",
                    "bannerName":"dbs-sme.JPG",
                    "url":"https://www.dbs.com.sg/sme"
                },
                {
                    "title":"DBS Online Loan Application Form",
                    "desc":"Led a team of UI developers to create a single widget housing a multi-paged online loan application form.",
                    "bannerName":"olaf.JPG",
                    "url":"https://abl.dbs.com/sg-olaf-ui/"
                }
            ]
        }
    }
    render(){
        let projectCards = this.state.projects.map((proj,index)=>{
            console.log("this is proj",proj);
            return (
                <ProjectCard key={index} project={proj} />
            )
        })
        return(
            <div className="projects u-padding-16" id="projects">
                <p className="projects__title">Projects</p>
                <p className="projects__sub-title u-margin-top-8">Due to the nature of my job scope, quite a few projects that I worked on will not be featured below.</p>
                <div className="projects__container u-margin-top-16">
                   {projectCards}

                </div>
            </div>
        )
    }
}

export default Projects;