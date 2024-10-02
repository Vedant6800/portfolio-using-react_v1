import React from 'react';

const contactInfo = [
    {
        ariaLabel: "Call Vedant",
        icon: "fa-phone",
        href: "tel:+918379085747",
        displayText: "+91 8379085747"
    },
    {
        ariaLabel: "Email Vedant",
        icon: "fa-envelope",
        href: "mailto:nogjavedant@gmail.com",
        displayText: "nogjavedant@gmail.com"
    },
    {
        ariaLabel: "View Vedant on GitHub",
        icon: "fa-github",
        href: "https://github.com/Vedant6800",
        displayText: "github.com/Vedant6800"
    },
    {
        ariaLabel: "View Vedant on LinkedIn",
        icon: "fa-linkedin",
        href: "https://www.linkedin.com/in/vedant-nogja/",
        displayText: "linkedin.com/in/vedant-nogja"
    }
];

const Contact = () => {
    return (
        <>
            {/* Eighth Section: Contact */}
            <section id="contact" className="section scrollspy full-height">
                <h3 className="page-title white-text teal">Contact</h3>
                <div className="container">
                    {contactInfo.map((contact, index) => (
                        <p key={index}>
                            <a aria-label={contact.ariaLabel} href={contact.href} target="_blank" data-position="top" data-tooltip={contact.ariaLabel} className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
                                <i className={`fa ${contact.icon}`} />
                            </a>
                            <a aria-label={contact.ariaLabel} href={contact.href} className="hoverline" target="_blank" rel="noopener noreferrer">
                                {contact.displayText}
                            </a>
                        </p>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Contact;
