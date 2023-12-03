import React from "react";
import "./ProjectCard.scss"

export interface ProjectCardProps {
    bannerPath: string,
    description: string,
    title: string,
    url: string,
}

export default function ProjectCard({bannerPath, description, title, url}: ProjectCardProps) {
    return (
        <div className="projects__item">
            <div className="projects__item__overlay__container">
                {/* <button href={this.props.project.url}>Go To Site</button> */}
                {/* <div className="projects__item__title">{this.props.project.title}</div> */}
                <a className="projects__item__cta" target="_blank" href={url}>Go to Site</a>
                <a href={url} target="_blank">
                    <div className="projects__item__overlay"></div>
                </a>
            </div>
            <img className="projects__experience-img" src={bannerPath}/>
            <div className="projects__item__description u-padding-8">
                <p className="projects__item__title">{title}</p>
                {description}
            </div>
        </div>
    )
}