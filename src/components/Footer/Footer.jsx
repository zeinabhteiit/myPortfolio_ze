import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>© 2026 Zeinab Hoteit. All rights reserved.</p>

                <div className="footer-links">
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
        </footer>
    );
}

export default Footer;
