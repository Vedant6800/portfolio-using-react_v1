import React from 'react';

const educationData = [
    {
        institution: "Swami Ramanand Teerth Marathwada University (SRTMUN)",
        location: "Latur, Maharashtra",
        degree: "Bachelor of Computer Application",
        cgpa: "9.08/10.00",
        year: "Second Year"
    },
    {
        institution: "Maharashtra State Board",
        location: "12th Grade (HSC)",
        year: "2020-2021",
        percentage: "96%"
    },
    {
        institution: "Maharashtra State Board",
        location: "10th Grade (SSC)",
        year: "2018-2019",
        percentage: "89.40%"
    }
];

const Education = () => {
    return (
        <section id="education" className="section scrollspy">
            {/* Seventh Section: Education */}
            <h3 className="page-title white-text teal">Education</h3>
            <div className="container">
                <div className="row">
                    {educationData.map((education, index) => (
                        <div className="col s12 m6 l4" key={index}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title teal-text hoverline">{education.institution}</span>
                                    <p className="brown-text">{education.location}</p>
                                    {education.degree && <p><b>Degree:</b> {education.degree}</p>}
                                    {education.cgpa && <p><b>CGPA:</b> {education.cgpa}</p>}
                                    {education.year && <p><b>Year:</b> {education.year}</p>}
                                    {education.percentage && <p><b>Percentage:</b> {education.percentage}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
