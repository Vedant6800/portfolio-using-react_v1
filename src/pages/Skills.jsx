import React from 'react';

const skillsData = {
    languagesAndDatabases: [
        { name: "HTML5", image: "/assets/img/html5-300x300.jpg" },
        { name: "CSS3", image: "/assets/img/css3-300x300.jpg" },
        { name: "MySQL", image: "/assets/img/mysql-logo-1-300x300.jpg" },
        { name: "C++", image: "/assets/img/C++.png" },
        { name: "Java", image: "/assets/img/java.png" }
    ],
    frameworks: [
        { name: "Bootstrap", image: "/assets/img/bootstrap.png" },
        { name: "Tailwind", image: "/assets/img/tailwind.webp" }
    ],
    other: [
        { name: "Git", image: "/assets/img/git.png" }
    ]
};

const Skills = () => {
    return (
        <>
            {/* Fifth Section: Skills */}
            <section id="skills" className="section scrollspy">
                <h3 className="page-title white-text teal">Skills</h3>
                <div className="container">
                    {/* Languages and Databases */}
                    <div className="card">
                        <div className="card-content">
                            <h4 className="brown-text light">Languages and Databases</h4>
                            <div className="row text-center">
                                {skillsData.languagesAndDatabases.map((skill, index) => (
                                    <div className="col s4 m2" key={index}>
                                        <img alt={skill.name} src={skill.image} className="responsive-img" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="card">
                        <div className="card-content">
                            <h4 className="brown-text light">Frameworks</h4>
                            <div className="row text-center">
                                {skillsData.frameworks.map((skill, index) => (
                                    <div className="col s4 m2" key={index}>
                                        <img alt={skill.name} src={skill.image} className="responsive-img" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Other */}
                    <div className="card">
                        <div className="card-content">
                            <h4 className="brown-text light">Other</h4>
                            <div className="row text-center">
                                {skillsData.other.map((skill, index) => (
                                    <div className="col s4 m2" key={index}>
                                        <img alt={skill.name} src={skill.image} className="responsive-img" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;
