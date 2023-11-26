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
            <div style={{ backgroundImage: `url(${bannerPath})` }} className="projects__experience-img"></div>
            <div className="projects__item__description u-margin-top-8 u-padding-8">
                <p className="projects__item__title">{title}</p>
                {description}
            </div>
            {/* <div className="projects__item__content u-padding-8">
                    <p className="projects__item__title">
                        {this.props.project.title}
                    </p>
                    <p className="projects__item__desc">
                        Developed prototype components using angular before integrating to liferay
                    </p>
                </div> */}
        </div>
    )
}