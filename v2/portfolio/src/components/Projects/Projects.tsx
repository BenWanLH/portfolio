import React from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard/ProjectCard";
import "./Projects.scss";

export default function Projects() {

    const projects: ProjectCardProps[] = [
        {
            "title": "DBS SME Webpage",
            "description": "Developed and maintained reusable components using angular and integrated those components into a liferay application.",
            "bannerPath": "assets/dbs-sme.JPG",
            "url": "https://www.dbs.com.sg/sme"
        },
        {
            "title": "Personalise",
            "description": "Maintained and developed features for Personalise, a web personalisation and email tool for government agencies",
            "bannerPath": "assets/personalise-screenshot.png",
            "url": "https://personalise.gov.sg/"
        }
    ]

    return (
        <div className="projects u-padding-16" id="projects">
            <p className="projects__title">Projects</p>
            <p className="projects__sub-title u-margin-top-8">Due to the nature of my job scope, quite a few projects that I worked on will not be featured below.</p>
            <div className="projects__container u-margin-top-16">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard 
                            key={index}
                            bannerPath={project.bannerPath}
                            description={project.description}
                            title={project.title}
                            url={project.url}
                        />
                    )
                })}

            </div>
        </div>
    )
}