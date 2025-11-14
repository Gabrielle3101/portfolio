// Education.jsx
export default function Education() {
    return (
        <section className="education section" id="education">
    <div className="section__header">
        <h2>Education</h2>
        <p className="lead">Academic background and key highlights.</p>
    </div>

    <div className="section__content">
        <div className="edu-card">
            <div className="left">
                <h3>Landmark University</h3>
                <div className="sub">B.Sc Computer Science — 300 Level</div>
                <div className="cgpa">CGPA: 4.57</div>
            </div>

            <div className="right">
                <div className="period">Expected graduation: 2027</div>
                <div className="badge">Dean's List</div>
            </div>
        </div>

        <div className="edu-note">Relevant coursework: Data Structures, Algorithms, Databases, Web Development</div>
    </div>
</section>
);
}