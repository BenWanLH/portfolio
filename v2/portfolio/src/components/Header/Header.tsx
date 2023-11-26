"use client";

import React, { useState } from "react"
import "./Header.scss"

interface HeaderInfo {
    title: string,
    id: string
}

export default function Header() {

    const [headers, setHeaders] = useState<HeaderInfo[]>([{ "title": "About Myself", "id": "about" }, { "title": "Projects", "id": "projects" }])

    const scrollToSection = (id: string) => {
        const barHeight = 66;
        let ele = document.getElementById(id);
        console.log("scrolling", id, ele);

        if (ele) {
            window.scrollTo({ top: ele.offsetTop - barHeight, behavior: 'smooth' })
        }
    };

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    LH
                </div>
                <div className="header__navigation">
                    { headers.map((item, index) => {
                        return (
                            <span key={index} className="header__navigation__item u-padding-16" onClick={() => scrollToSection(item.id)}>{item.title}</span>
                        )
                    }) }
                </div>
            </div>

        </div>
    );
}