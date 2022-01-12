import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css"


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "Willing and able to build full stack applications from the ground up with eloquence and the utmost efficiency. Strong professional who is willing and able to be an asset for any organization.",
        highlights: {
            bullets: [
                "Full Stack web and mobile development",
                "Interactive Front End pixel perfect to design",
                "React and React Native",
                "Redux for State Management",
                "Building RESTful API's",
                "Managing databases (SQL type or Mongo)"
            ],
            heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className='about-me-options'>
                            <button className="btn primary-btn">
                                {""}
                                Hire me{" "}
                            </button>
                            <a
                                href="Michael Klein Resume.pdf"
                                download="Michael_Klein_Resume.pdf"
                            >
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}