import React from "react"
import "./Header.scss"

export class Header extends React.Component{
    constructor(){
        super();
        let headers = [{"title":"About Myself","id":"about"}, {"title":"Projects","id":"projects"}];
        this.state = {
            headers:headers
        }

    }
    render(){
        let headersContent = this.state.headers.map((item,index)=>{
            return(
                <span key={index} className="header__navigation__item u-padding-16" onClick={()=>this.scrollToSection(item.id)}>{item.title}</span>
            )
        })
        return(
            <div className="header">
                <div className="header__container">
                    <div className="header__title" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
                        LH
                    </div>
                    <div className="header__navigation">
                        {headersContent}
                    </div>
                </div>

            </div>
        );
    }
    
    scrollToSection(id){
        const barHeight = 66;
        let ele = document.getElementById(id);
        console.log("scrolling",id,ele);

        if(ele){
            window.scrollTo( {top: ele.offsetTop-barHeight, behavior: 'smooth'})
        }
    }
    


}

export default Header;