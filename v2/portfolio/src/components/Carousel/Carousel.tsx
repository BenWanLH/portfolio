"use client";
import { ReactNode, useEffect, useRef, useState } from "react"
import "./Carousel.scss"

export interface CarouselProp {
    carouselItems: ReactNode[]
    hideNav?: boolean
} 

function Carousel({ carouselItems, hideNav = false } : CarouselProp) {

    const [activeIndex, setActiveIndex]= useState(0);
    const [autoScrollTimeout, setAutoScrollTimeout] = useState<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() =>{
        if(autoScrollTimeout) {
            clearTimeout(autoScrollTimeout)
            setAutoScrollTimeout(undefined)
        }
        setAutoScrollTimeout(setTimeout(()=>{
            if(activeIndex + 1 >= carouselItems.length) {
                onDotClick(0);
            } else {
                onDotClick(activeIndex+1);
            }
        }, 5000))
        return () =>{
            if(autoScrollTimeout) {
                clearInterval(autoScrollTimeout)
                setAutoScrollTimeout(undefined)
            }
        }

    }, [activeIndex]);

    const contentRef = useRef<HTMLDivElement>(null);

    const carouselFooter = () => {
       return carouselItems!.map((item, index) =>{
        return (
            <span 
                key={index}
                className={`carousel__footer__dot ${index === activeIndex ? 'carousel__footer__dot--active': ''}`}
                onClick={()=>onDotClick(index)}
            >
            </span>
        );
       });
    }

    const onScroll = () =>{

        const content = contentRef.current!;

        const contentWidth = content.offsetWidth;

        const offset = contentWidth/2;

        if(content.scrollLeft < offset) {
            setActiveIndex(0);
            return;
        }

        const n = content.scrollLeft + (contentWidth / 2);

        const closestMultiple = n - (n%contentWidth); 

        const newIndex = closestMultiple / contentWidth;

        setActiveIndex(content.scrollLeft > closestMultiple + offset ? newIndex + 1 : newIndex)

    }


    const onNext = () => {
        if(activeIndex-1 === carouselItems.length) return;

        contentRef.current?.scroll( {
            left: contentRef.current?.offsetWidth * (activeIndex +1),
            top: 0,
            behavior: 'smooth'
        })
    }

    const onPrev = () => {
        if(activeIndex-1 === carouselItems.length) return;

        contentRef.current?.scroll( {
            left: contentRef.current?.offsetWidth * (activeIndex -1),
            top: 0,
            behavior: 'smooth'
        })

    }

    const onDotClick = (index: number) => {
        contentRef.current?.scroll( {
            left: contentRef.current?.offsetWidth * index,
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="carousel">
            <div className="carousel__container">
                <div className="carousel__body">
                   {!hideNav && <img className="carousel__control" src="/assets/icon/left-icon.png" onClick={onPrev}></img>}
                    <div className="carousel__slider">
                        <div className="carousel__content" ref={contentRef} onScroll={onScroll}>
                            {carouselItems}
                        </div>
                    </div>
                    {!hideNav && <img className="carousel__control" src="/assets/icon/right-icon.png" onClick={onNext}></img>}
                </div>
                <div className="carousel__footer">
                    {carouselFooter()}
                </div>
            </div>
        </div>
    )
}

export default Carousel