import '../../styles/Resume.css';
import React from "react";

function Resume() {
    return (
        <section className="ResumeContainer">
            <div className="ContText">
                <h2>Resume</h2>

                <h4>Education</h4>
                <ul>
                    <li>University of Minnesota</li>
                    <li>Normandale Community College</li>
                    <li>University of Minnesota Bootcamps</li>
                </ul>

                <h4>Technologies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                </ul>
                <div>
                    My Resume
                    <a href={require("../../assets/PhotoList/MayraResumeSE.pdf")} download className="download">Download</a>
                </div>
            </div>
        </section>
    )
}

export default Resume;