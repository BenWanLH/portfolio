
"use client";
import { ReactNode } from "react"
import "./CarouselItem.scss"

export interface CarouselItemProps {
    children: ReactNode
}

function CarouselItem({ children } : CarouselItemProps) {
    return (
        <div className="carousel-item">
            <div className="carousel-item__content">
                {children}
            </div>
        </div>
    )
}

export default CarouselItem