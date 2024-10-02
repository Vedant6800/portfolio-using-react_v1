import React from 'react'

const projects = [
    {
        title: "Healthy Humanity",
        image: "/assets/img/project-ai-1.jpg",
        role: "Frontend + Backend Developer",
        description: "Led the development of a platform aimed at providing comprehensive healthcare information and precautions.",
        accomplishments: [
            "Ensured seamless integration of frontend and backend components.",
            "Gained valuable insights into implementing Azure services during the project's development phase."
        ]
    },
    {
        title: "EduTrack Pro",
        image: "/assets/img/project-ai-1.jpg",
        role: "Java Developer",
        description: "Spearheaded the development of EduTrack Pro, a sophisticated fees and student data management system.",
        accomplishments: [
            "Implemented a system managing fees and student data for as many students as the institute wants.",
            "Integrated personalized and collaborative reporting features for streamlined data interpretation."
        ]
    },
    {
        title: "ltr-soft.com",
        image: "/assets/img/project-ai-1.jpg",
        role: "PHP Developer",
        description: "Played a pivotal role in the development of ltr-soft.com, a web-based platform with multifaceted functionalities.",
        accomplishments: [
            "Designed and handled a database of more than 100 tables.",
            "Implemented a secure payment system for course purchases through payment gateway integration.",
            "Developed role-based user management functionalities catering to various user roles.",
            "Introduced task automation features for project subtasks and an Exam Management System."
        ]
    },
    {
        title: "Police Feedback System (Social Media Platform)",
        image: "/assets/img/project-ai-1.jpg",
        role: "Full Stack Developer",
        description: "Conceptualized and developed a social media platform dedicated to gathering feedback from the general public regarding the police department.",
        accomplishments: [
            "Designed a responsive mobile interface to facilitate feedback submission from smartphones and tablets.",
            "Employed technologies such as HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL for platform development."
        ]
    }
];

const Projects = () => {
    return (
        <>
            {/* Fourth Section: Projects */}
            <section id="projects" className="section scrollspy">
                <h3 className="page-title white-text teal">Projects</h3>
                <div className="container">
                    <div className="row">
                        {/* Dynamic Project Cards */}
                        {projects.map((project, index) => (
                            <div className="col s12 m6 l4" key={index}>
                                <div className="card medium">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt={`Screenshot of ${project.title}`} src={project.image} style={{ height: '100%', width: '100%' }} className="activator" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator teal-text hoverline">{project.title}<i className="mdi-navigation-more-vert right" /></span>
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text"><small>Accomplishments</small><i className="mdi-navigation-close right" /></span>
                                        <p><strong>Accomplishments:</strong></p>
                                        <ul>
                                            {project.accomplishments.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;
