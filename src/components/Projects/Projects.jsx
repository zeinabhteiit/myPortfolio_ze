import "./Projects.css";

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="container projects-page">
                <div className="projects-header">
                    <p className="section-label">Projects</p>

                    <h2>
                        E-commerce
                        <span> projects and experience.</span>
                    </h2>

                    <p className="projects-intro">
                        A selection of my experience in e-commerce coordination and
                        full-stack web development.
                    </p>
                </div>

                <div className="projects-grid">
                    {/* Toys R Us */}

                    <article className="project-card">
                        <span className="project-category">
                            E-commerce Coordination
                        </span>

                        <h3>Toys“R”Us Lebanon</h3>

                        <p className="project-description">
                            I manage and coordinate the Toys“R”Us Lebanon e-commerce website
                            following its handover, ensuring that website content, products,
                            categories, pricing, and stock information remain accurate and
                            up to date.
                        </p>

                        <div className="project-details">
                            <h4>Key Responsibilities</h4>

                            <ul>
                                <li>Manage and update products through the CMS.</li>
                                <li>Organize categories, collections, filters, and navigation.</li>
                                <li>Update homepage banners, promotions, and website content.</li>
                                <li>Follow up on price, stock, and product-data synchronization.</li>
                                <li>Test website features and report technical issues.</li>
                                <li>
                                    Coordinate with developers, designers, logistics, and internal
                                    teams.
                                </li>
                            </ul>
                        </div>

                        <div className="project-tags">
                            <span>CMS Management</span>
                            <span>Product Data</span>
                            <span>Business Central API</span>
                            <span>Google Analytics</span>
                            <span>Website Testing</span>
                            <span>Customer Experience</span>
                        </div>

                        <div className="project-buttons">
                            <a
                                href="https://toysrus.com.lb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-button"
                            >
                                Visit Website
                            </a>
                        </div>
                    </article>

                    {/* Athletic Sports */}

                    <article className="project-card">
                        <span className="project-category">
                            Full-Stack Development
                        </span>

                        <h3>Athletic Sports</h3>

                        <p className="project-description">
                            A responsive full-stack e-commerce platform developed for a
                            local sports shop, allowing customers to explore products,
                            filter by category, manage their cart, create accounts, and
                            place orders online.
                        </p>

                        <div className="project-details">
                            <h4>Main Features</h4>

                            <ul>
                                <li>Responsive product catalogue.</li>
                                <li>Category filtering and product browsing.</li>
                                <li>Shopping-cart functionality.</li>
                                <li>User registration and authentication.</li>
                                <li>Admin dashboard for product management.</li>
                                <li>Backend APIs and order-management functionality.</li>
                            </ul>
                        </div>

                        <div className="project-tags">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>

                        <div className="project-buttons">
                            <a
                                href="https://frontend-eco-zee10.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-button"
                            >
                                View Live Project
                            </a>

                            <a
                                href="https://github.com/zeinabhteiit/frontend_eco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="secondary-button"
                            >
                                Frontend Code
                            </a>

                            <a
                                href="https://github.com/zeinabhteiit/backend_eco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="secondary-button"
                            >
                                Backend Code
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Projects;
