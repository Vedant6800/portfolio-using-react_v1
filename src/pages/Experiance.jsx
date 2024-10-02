import React from 'react'

const experiences = [
    {
        company: "CodSoft",
        logo: "/assets/img/codsoft-logo.jpg",
        role: "Web Development Intern",
        description: "Completed various tasks in web development. Developed various short projects (modules) assigned by the company.",
        date: "September 1st 2023 - September 30 2023",
        location: "Remote"
    },
    {
        company: "Ltr Soft Pvt Ltd",
        logo: "/assets/img/ltrsoft-logo.jpg",
        role: "PHP Development Intern",
        description: `Implemented secure payment system for course purchases through Payment Gateway Integration. 
                      Developed user roles (Admin, Teacher, Student, Developer) for task allocation in Role-Based User Management.
                      Created MySQL database structure for efficient data storage in Database Design and Management.
                      Led development of task allocation feature for project subtasks in Task Automation for Developer Role.`,
        date: "May 2023 – August 2023",
        location: "Latur, Maharashtra"
    },
    {
        company: "Ltr Soft Pvt Ltd",
        logo: "/assets/img/ltrsoft-logo.jpg",
        role: "Java Developer",
        description: `Developed a comprehensive fees management system for LTR Soft Pvt Ltd using Java Swing for the frontend
                      and MySQL for the backend. 
                      Designed and implemented a user-friendly interface, ensuring seamless tracking of student information
                      and fees with high accuracy and efficiency.
                      Successfully contributed to the streamlining of the institute's management process, saving time and boosting overall productivity.`,
        date: "February 2023 – May 2023",
        location: "Latur, Maharashtra"
    }
];

const Experience = () => {
    return (
        <>
            {/* Third Section: Experience */}
            <section id="experience" className="section scrollspy">
                <h3 className="page-title white-text teal">Experience</h3>
                <div className="container">
                    {/* Dynamic Experience Cards */}
                    {experiences.map((exp, index) => (
                        <div className="card" key={index}>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s12 m2">
                                        <img alt={`${exp.company} logo`} src={exp.logo} className="responsive-img center-block" />
                                    </div>
                                    <div className="col s12 m10">
                                        <p>
                                            <span className="card-title brown-text text-darken-2">{exp.company}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="role brown-text text-darken-2">{exp.role}</div>
                                <p>{exp.description}</p>
                            </div>
                            <div className="card-action">
                                <span>{exp.date} | {exp.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Experience;
