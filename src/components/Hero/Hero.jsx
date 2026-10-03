import "./Hero.css";
import heroImage from "../../assets/zeinab-photo.jpeg";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="intro-text">
                        <span className="intro-line"></span>
                        Hello, I’m Zeinab
                    </p>

                    <h1>
                        Web Developer
                        <span>& E-commerce Coordinator</span>
                    </h1>

                    {/* <p className="hero-description">
                        I create clean, responsive, and user-friendly websites using HTML,
                        CSS, JavaScript, and React. I also manage digital experiences that
                        support e-commerce growth and improve the customer journey.
                    </p> */}

                    <div className="hero-buttons">
                        <a href="#projects" className="primary-button">
                            View My Work
                        </a>

                        <a href="#contact" className="secondary-button">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-image-area">
                    <div className="image-background"></div>

                    <div className="image-wrapper">
                        <img src={heroImage} alt="Zeinab Hoteit" />
                    </div>

                    <div className="experience-card">
                        <strong>Creative</strong>
                        <span>Web Experiences</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
