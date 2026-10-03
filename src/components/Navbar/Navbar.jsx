import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-content">
                <a href="#home" className="logo">
                    ZH
                </a>

                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a href="#contact" className="nav-button">
                    Let’s Talk
                </a>
            </div>
        </header>
    );
}

export default Navbar;
