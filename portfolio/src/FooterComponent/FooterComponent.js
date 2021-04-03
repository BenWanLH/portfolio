import React from "react";

import "./FooterComponent.scss"

export class Footer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="footer">
                <div className="footer__icon-container">
                    {/* <div class="footer__sticky-container">
                        <a target="_blank" href="mailto: benedictwanlihau@hotmail.com"className="icon icon__email u-margin-right-16"></a>
                        <a target="_blank" href="https://www.linkedin.com/in/li-hau-wan-87741214b/" className="icon icon__linkedIn u-margin-right-8"></a>
                    </div> */}
                    {/* <div className="u-width-50">
                        <div>
                            <a target="_blank" href="mailto: benedictwanlihau@hotmail.com"className="icon icon__email"></a>
                            <span>benedictwanlihau@hotmail.com</span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="u-width-50">
                        <a target="_blank" href="https://www.linkedin.com/in/li-hau-wan-87741214b/" className="icon icon__linkedIn u-margin-right-8"></a>
                    </div>*/}
                </div> 
            </div>
        )
    }
}

export default Footer;