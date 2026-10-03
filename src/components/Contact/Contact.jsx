import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-page">
                <div className="contact-header">
                    <p className="section-label">Contact</p>

                    <h2>
                        Let’s work
                        <span> together.</span>
                    </h2>

                    <p className="contact-intro">
                        Have a project, opportunity, or question? Feel free to get in
                        touch.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-information">
                        <div className="contact-text">
                            <h3>Let’s start a conversation</h3>

                            <p>
                                I am open to web development projects, e-commerce opportunities,
                                and professional collaborations.
                            </p>
                        </div>

                        <div className="contact-details">
                            <a
                                href="mailto:zeinabhteit1@gmail.com"
                                className="contact-detail-card"
                            >
                                <span className="contact-detail-label">Email</span>
                                <strong>zeinabhteit1@gmail.com</strong>
                            </a>

                            <div className="contact-detail-card">
                                <span className="contact-detail-label">Location</span>
                                <strong>Beirut, Lebanon</strong>
                            </div>

                            <div className="contact-detail-card">
                                <span className="contact-detail-label">Availability</span>
                                <strong></strong>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a
                                href="https://www.linkedin.com/in/zeinab-hoteit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/zeinabhteiit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <form
                        className="contact-form"
                        action="https://formsubmit.co/zeinabhteit1@gmail.com"
                        method="POST"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="New Portfolio Contact Message"
                        />

                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What would you like to discuss?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
