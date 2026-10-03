import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="container about-page">
                <div className="about-header">
                    <p className="section-label">About Me</p>

                    <h2>
                        Building meaningful digital experiences through
                        <span> development and e-commerce.</span>
                    </h2>

                    <p className="about-intro">
                        I am a Web Developer and E-commerce Coordinator with a background
                        in Computer and Telecommunications Network Engineering. I combine
                        technical knowledge, creativity, and e-commerce experience to
                        create practical and user-focused digital solutions.
                    </p>
                </div>

                <div className="about-grid">
                    <article className="about-box">
                        <span className="box-number">01</span>

                        <h3>Web Development</h3>

                        <p>
                            Creating responsive and user-friendly websites using HTML, CSS,
                            JavaScript, React, and modern development tools.
                        </p>
                    </article>

                    <article className="about-box">
                        <span className="box-number">02</span>

                        <h3>E-commerce Coordinator</h3>

                        <p>
                            Managing products, website content, pricing, stock information,
                            collections, and the online shopping experience.
                        </p>
                    </article>

                    <article className="about-box">
                        <span className="box-number">03</span>

                        <h3>Backend & Databases</h3>

                        <p>
                            Working with Node.js, Express.js, PHP, MongoDB, MySQL, REST APIs,
                            and CRUD operations.
                        </p>
                    </article>

                    <article className="about-box">
                        <span className="box-number">04</span>

                        <h3>Problem Solving</h3>

                        <p>
                            Transforming technical and business requirements into organized,
                            functional, and practical digital solutions.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default About;
