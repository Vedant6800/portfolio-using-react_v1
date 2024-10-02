import React, { useState, useEffect } from 'react';

const Intro = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const words = ["Web Developer", "Software Developer", "Fast Learner"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed, loopNum, words]);

    return (
        <>
            {/* First Section: Heading lines and image */}
            <section id="intro" className="section scrollspy full-height">
                <div className="overlay" />
                <div className="container">
                    <div className="col-md-9">
                        <div className="content section-padding valign" style={{ marginLeft: '10%', marginTop: 50 }}>
                            <div className="caption">
                                <h2>Hi, I'm <span className="teal">Vedant Nogja</span></h2>
                                <h5 style={{ color: '#fff' }}>
                                    A <span className="typing" style={{ fontWeight: 300, color: '#004d40' }}>{text}</span>
                                </h5>
                                <h5>Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and
                                    challenging real-world problems.</h5>
                            </div>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/vedant-nogja/" target="_blank" rel="noopener noreferrer">
                                    <button className="icon-btn linkedin">
                                        <i className="fa fa-linkedin" />
                                    </button>
                                </a>
                                <a href="https://github.com/Vedant6800" target="_blank" rel="noopener noreferrer">
                                    <button className="icon-btn github">
                                        <i className="fa fa-github" />
                                    </button>
                                </a>
                                <a href="https://www.instagram.com/vedant6800/" target="_blank" rel="noopener noreferrer">
                                    <button className="icon-btn instagram">
                                        <i className="fa fa-instagram" />
                                    </button>
                                </a>
                            </div>
                            <div className="buttons">
                                <a href="#about" className="readme">Read More</a>
                                <a href="#contact" className="contactme">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Intro;
