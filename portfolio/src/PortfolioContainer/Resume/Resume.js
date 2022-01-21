import React, { useEffect, useState, useRef} from 'react'
import './Resume.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})
    const EducationRef = useRef();
    const WorkHistoryRef = useRef();
    const ProgrammingSkillsRef = useRef();
    const ProjectsRef = useRef();
    const InterestsRef = useRef();


    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) {
            return
        }
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className ='heading-date'>
                            {props.fromDate+ "-" +props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    }

    const resumeBullets = [
        { label : "Education", logoSrc: "education.svg"},
        { label : "Work History", logoSrc: "work-history.svg"},
        { label : "Programming Skills", logoSrc: "programming-skills.svg"},
        { label : "Projects", logoSrc: "projects.svg"},
        { label : "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillDetails = [
        {skill: "Javascript", ratingPercentage: 85},
        {skill: "ReactJS", ratingPercentage: 85},
        {skill: "Express JS", ratingPercentage: 80},
        {skill: "Node JS", ratingPercentage: 75},
        {skill: "MongoDB", ratingPercentage: 75},
        {skill: "HTML", ratingPercentage: 80},
        {skill: "CSS", ratingPercentage: 80},
        {skill: "Python", ratingPercentage: 65},
        {skill: "GraphQL", ratingPercentage: 70},
        {skill: "SQL(PostgresQL/MySQL", ratingPercentage: 70},
        {skill: "C", ratingPercentage: 65},
        {skill: "Core Java", ratingPercentage: 70},
    ]

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: '2020', toDate: '2021'},
            description: "A Personal Portfolio that consolidates all my details into an easily digestible format.",
            subHeading: "Technologies Used: React JS, Bootstrap."
        },
        {
            title: "Carribean Sailing Vacations",
            duration: { fromDate: '2019', toDate: '2019'},
            description: "An AirBnB type application geared towards personal yacht sailing experiences in the Carribean",
            subHeading: "Technologies Used: React JS, MongoDB, NodeJS, ExpressJS, SCSS, Styled Components."
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: '2020', toDate: '2021'},
            description: "A Personal Portfolio that consolidates all my details into an easily digestible format.",
            subHeading: "Technologies Used: React JS, Bootstrap."
        },
    ]

    const resumeDetails = [
        <div
            className='resume-screen-container'
            key='education'
            ref={EducationRef}
        >
            <ResumeHeading
                heading={"Stevens Institute of Technology"}
                subHeading={"MASTERS OF COMPUTER SCIENCE"}
                fromDate={'2021'}
                toDate={'current'}
                />
            <ResumeHeading
                heading={"Full Sail University"}
                subHeading={"BACHELORS OF SCIENCE IN GAME ART"}
                fromDate={'2010'}
                toDate={'2012'}
            />
        </div>,

        <div
            className='resume-screen-container'
            key='work-experience'
            ref={WorkHistoryRef}
        >
            <div className="experience-container">
                <ResumeHeading
                    heading={"Apple via Apex Systems"}
                    subHeading={"Technical Program Manager/Software Engineer"}
                    fromDate={'2019'}
                    toDate={'2021'}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Created a new workflow for QA artists to improve productivity, using Node.js and gathering user stories,
        resulting in an improvement in project delivery speed by 466%.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Implemented training program for QA artists and curated guides, using Quip, reducing training time by a factor
        of ~600% and turning employees from brand new to production ready.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        - Improved quality and speed of our QA artists by designing new tools, using github tickets, eliminating 3rd
        Party programs and saving Apple $40k+ annually and also scaling the process by 2.5X.
                    </span>
                    <br/>
                </div>
                <ResumeHeading
                    heading={"Reso"}
                    subHeading={"Front End Engineer"}
                    fromDate={'2018'}
                    toDate={'2018'}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Migrated front end to a modern framework working off of microservices and compiled with webpack, using
        backbone.js, ReactRouter, and Redux, resulting in a reduced load time by a factor of 100X.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Built a SCSS library to reduce redundancy in code, using SCSS, reducing turnaround time for advertising
        templates from 1.5 days to an hour or less and reducing redundancy in code by 2.5X.
                    </span>
                    <br/>
                    <span className='resume-description-text'>
                        - Streamlined UI design, using React, resulting in an increase in user retention by 45% and overall happiness of
        our users by 80%.
                    </span>
                </div>
                <ResumeHeading
                    heading={"Cinch Sports"}
                    subHeading={"Front End Engineer"}
                    fromDate={'2018'}
                    toDate={'2018'}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Architected application to modernize tech stack, using HTML, jQuery, and React.js, resulting in a higher
        retention rate of new users.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Migrated old application to a single web application, using HTML, jQuery, and React.js, resulting in an increase
        in product engagement of 100%.
                    </span>
                </div>
                <ResumeHeading
                    heading={"UC Berkeley Web Development Certification Program"}
                    subHeading={"Software Engineer"}
                    fromDate={'2017'}
                    toDate={'2018'}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Led and trained students through week-long project sprints, using MongoDB, Express, React and Node.js,
        resulting in over 200+ students achieving their certification.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Went over all studentsʼ projects by debugging their codebases, using MongoDB, Express, React and Node.js,
        resulting in the creation of ~50 student projects and the removal of 1K+ bugs.
                    </span>
                </div>
            </div>
        </div>,
        <div
            className='resume-screen-container programming-skills-container'
            key="programming-skills"
            ref={ProgrammingSkillsRef}
        >
            {programmingSkillDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage + '%'}}
                        className='active-percentage-bar'></div>
                    </div>
                </div>
            ))}
        </div>,

        <div
            className='resume-screen-container'
            key='projects'
            ref={ProjectsRef}
        >
            {projectDetails.map((projectDetail, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetail.title}
                    subHeading={projectDetail.subHeading}
                    description={projectDetail.description}
                    fromDate={projectDetail.duration.fromDate}
                    toDate={projectDetail.duration.toDate}
                />
                ))}
        </div>,

        <div
            className='resume-screen-container'
            key='interests'
            ref={InterestsRef}
        >
            <ResumeHeading
                heading='3D Arts and Animation'
                description='From Video Games to Movies I am an appreciator of everything CG based
                and am in constant awe of the awesome artists that push themselves to deliver the
                superb quality we see these days.'
            />
            <ResumeHeading
                heading='Painting'
                description='Anything including acrylic painting to Warhammer figurines, to just appreciating a good museum,
                I am a fan of pushing myself artistically and designing things in a medium
                where the possibilities can seem endless.'
            />
            <ResumeHeading
                heading='My Dog'
                description="Daisy is a Corgi/Pomeranian/Maltese mix and she's adorable."
            />
        </div>
    ]

    const handleCarousal = (index) => {
        let offsetHeight;
        if (index === 2) {
            offsetHeight = ProgrammingSkillsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else if (index === 1) {
            offsetHeight = WorkHistoryRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        } else if (index === 0) {
            offsetHeight = EducationRef.current.scrollIntoView({
                behavior: 'smooth',
                block: "center"
            });
        } else if (index === 3) {
            ProjectsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            InterestsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        setSelectedBulletIndex(index);
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : 'bullet'
                }
                key={index}
            >
                <img
                    className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='Oops, no internet connection'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div
                style={carouselOffSetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    useEffect(() => {
        return () => {
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription])

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={"My Formal Bio Details"}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}