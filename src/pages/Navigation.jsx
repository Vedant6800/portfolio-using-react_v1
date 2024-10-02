import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className="hide-on-small-only">
                <ul className="side-nav fixed section table-of-contents">
                    <li className="logo">
                        <a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro" className="brand-logo grey-blue-text">
                            <img src="/assets/img/passport-new.jpg" className="circle img-responsive profile-pic" alt="avatar" />
                        </a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small" /><span>About</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark teal-text"><i className="mdi-action-trending-up small" /><span>Experience</span></a>
                    </li>
                    <li className="bold">
                        {/* mdi-av-web small
       mdi-av-my-library-books small*/}
                        <a aria-label="Navigate to the Projects section" href="#projects" className="waves-effect waves-dark teal-text"><i className="mdi-av-my-library-books small" /><span>Projects</span></a>
                    </li>
                    <li className="bold">
                        {/*
  ICONS:
  mdi-action-assessment
  mdi-social-poll
  mdi-av-equalizer
  */}
                        <a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark teal-text"><i className="mdi-action-assessment small" /><span>Skills</span></a>
                    </li>
                    <li className="bold">
                        {/*
  ICONS:
  */}
                        <a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark teal-text"><i className="mdi-social-school small" /><span>Education</span></a>
                    </li>
                    <li className="bold">
                        {/* 
  1. mdi-communication-contacts
  2. mdi-content-mail
  3. mdi-communication-email
  */}
                        <a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark teal-text"><i className="mdi-content-mail small" /><span>Contact</span></a>
                    </li>
                    <li className="bold">
                        {/*
  ICONS:
  1. mdi-action-description
  2. mdi-file-folder
  3. mdi-file-folder-open
  4. mdi-file-attachment
  5. mdi-file-folder-shared
  */}
                        <a aria-label="Open Vedant's resume in a new tab" href="https://vedant6800.github.io/assets/resume/Vedant_Nogja_Resume.pdf" target="_blank" className="waves-effect waves-dark teal-text"><i className="mdi-file-folder-open small" /><span>Resume</span></a>
                    </li>
                </ul>
            </nav>
            {/* Nav class 2 */}
            <nav className="hide-on-large only trigger z-depth-1">
                <a aria-label="Toggle visibility of the mobile navbar" href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu" /></a>
                <div className="name-title">
                    <a id="name" aria-label="Navigate to the beginning of the page" href="#" className="teal-text">Vedant Nogja</a><span className="black-text">Software | Web Developer</span>
                </div>
            </nav>
            {/* Nav class 3 */}
            <nav className="hide-on-large only">
                <ul id="slide-out" className="side-nav">
                    <li className="bold">
                        <a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small" /><span>About</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark teal-text"><i className="mdi-action-trending-up small" /><span>Experience</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the Projects section" href="#projects" className="waves-effect waves-dark teal-text"><i className="mdi-av-my-library-books small" /><span>Projects</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark teal-text"><i className="mdi-action-assessment small" /><span>Skills</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark teal-text"><i className="mdi-social-school small" /><span>Education</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark teal-text"><i className="mdi-content-mail small" /><span>Contact</span></a>
                    </li>
                    <li className="bold">
                        <a aria-label="Open Vedant's Resume in a new tab" href="https://drive.google.com/file/d/1T1ypCvS6G9eXODuJ9ageUWzLxKQwYgCT/view?usp=sharing" target="_blank" className="waves-effect waves-dark teal-text"><i className="mdi-file-folder-open small" /><span>Resume</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation