import "./TechStrip.css";

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Postman",
];

function TechStrip() {
    return (
        <section className="tech-strip" aria-label="Technologies">
            <div className="tech-track">
                <div className="tech-group">
                    {technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="tech-group" aria-hidden="true">
                    {technologies.map((technology) => (
                        <span key={`duplicate-${technology}`}>{technology}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStrip;
