import React from "react";
import "./ProjectCard.scss"
import dbssme from "../../dbs-sme.JPG";

export class ProjectCard extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="projects__item">
                <div className="projects__item__overlay__container">
                    {/* <button href={this.props.project.url}>Go To Site</button> */}
                    <div className="projects__item__title">{this.props.project.title}</div>
                    <a className="projects__item__cta" target="_blank" href={this.props.project.url}>Go to Site</a>
                    <a href={this.props.project.url} target="_blank">
                        <div className="projects__item__overlay"></div>
                    </a>
                   
                </div>
                <div style={{backgroundImage:`url(${process.env.PUBLIC_URL+"/assets/img/"+this.props.project.bannerName})`}} className="projects__experience-img"></div>
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
}

export default ProjectCard;