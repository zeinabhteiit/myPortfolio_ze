import "./Resume.css";

function Resume() {
    return (
        <section className="resume-section" id="resume">
            <div className="container resume-page">
                <div className="resume-header">
                    <p className="section-label">Resume</p>

                    <h2>
                        Education and
                        <span> professional experience.</span>
                    </h2>

                    <p className="resume-intro">
                        An overview of my education, work experience, and technical skills.
                    </p>
                </div>

                <div className="resume-content">
                    <div className="resume-column">
                        <h3 className="resume-column-title">Experience</h3>

                        <article className="resume-card">
                            <span className="resume-date">Oct 2025 – Present</span>

                            <h4>E-commerce Coordinator</h4>

                            <p className="resume-company">
                                Berytrade – Toys“R”Us Lebanon
                            </p>

                            <ul>
                                <li>
                                    Manage products, website content, collections, pricing, and
                                    stock information using a CMS.
                                </li>

                                <li>
                                    Support daily e-commerce operations and improve the online
                                    customer experience.
                                </li>

                                <li>
                                    Coordinate with internal teams and external partners to
                                    resolve website and operational issues.
                                </li>
                            </ul>
                        </article>

                        <article className="resume-card">
                            <span className="resume-date">Nov 2024 – May 2025</span>

                            <h4>Web and Mobile Web Development Bootcamp</h4>

                            <p className="resume-company">
                                Simplon.co and AUF-CEF
                            </p>

                            <ul>
                                <li>
                                    Completed intensive training in frontend and backend web development.
                                </li>

                                <li>
                                    Built responsive applications using HTML, CSS, JavaScript, React, and Vite.
                                </li>

                                <li>
                                    Worked with Node.js, Express.js, MongoDB, MySQL, Git, GitHub, and Postman.
                                </li>
                            </ul>

                            <a
                                href="/cert.AUF.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-button"
                            >
                                View Certificate
                            </a>
                        </article>
                    </div>

                    <div className="resume-column">
                        <h3 className="resume-column-title">Education & Training</h3>

                        <article className="resume-card">
                            <span className="resume-date">2024 – Present</span>

                            <h4>Master’s Degree in Telecommunications Engineering</h4>

                            <p className="resume-company">
                                Le CNAM University – Beirut
                            </p>
                        </article>

                        <article className="resume-card">
                            <span className="resume-date">2021 – 2024</span>

                            <h4>
                                Bachelor of Science in Computer and Telecommunications Network
                                Engineering
                            </h4>

                            <p className="resume-company">
                                Lebanese University – Faculty of Technology
                            </p>

                            <a
                                href="/bachelor degree.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-button"
                            >
                                View Certificate
                            </a>
                        </article>
                        <article className="resume-card">
                            <span className="resume-date">May 2024 – Jul 2024</span>

                            <h4>Web Development Intern</h4>

                            <p className="resume-company">
                                Cedars Software Solutions
                            </p>

                            <ul>
                                <li>
                                    Contributed to a Car Rental Management ERP system.
                                </li>

                                <li>
                                    Created and updated pages and forms using HTML, CSS, and JavaScript.
                                </li>

                                <li>
                                    Worked with PHP and MySQL for backend and database operations.
                                </li>
                            </ul>
                        </article>

                    </div>

                </div>

                <div className="resume-action">
                    <a href="/hoteitzeinab_cv.pdf" className="primary-button" download>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
