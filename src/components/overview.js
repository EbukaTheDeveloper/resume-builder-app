import {useRef, useEffect} from "react"
import ContactSvg from "../icons/contact-Icon";
import EducationSvg from "../icons/education-icon";
import WorkSvg from "../icons/work-icon";
import SkillSvg from "../icons/skill-icon";

const Overview = (props) => {
    const myRef = useRef(null);
    useEffect(()=> {
        function onTimeout () {
          myRef.current.className = 'overview-container';
          document.title = 'Overview';
        }

        const timeoutId = setTimeout(onTimeout, 4000);

        return () => {
          clearTimeout(timeoutId);
        }
    }, [myRef]);
    return (
        <div ref={myRef} className='hide'>
            <header className="white-text dark-green-bg">
                <h1>RESUME MAKER</h1>
                <p>Make your professional resume</p>
            </header>
            <div className="overview-grid">
                <div className="contact-overview first">
                    <ContactSvg />
                    <p>Contact Info</p>
                </div>
                <div className="work-overview second">
                    <WorkSvg />
                    <p>Work Experience</p>
                </div>
                <div className="education-overview third">
                    <EducationSvg />
                    <p>Education</p>
                </div>
                <div className="skill-overview fourth">
                    <SkillSvg />
                    <p>Skills</p>
                </div>
            </div>
            <div>
              <button className="build-resume-btn" onClick={props.handleClick}>Build Resume</button>
            </div>
        </div>
    )
}

export default Overview;