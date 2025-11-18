import { useEffect, useRef } from 'react';

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS/Sass', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 30},
    { name: 'Git/GitHub', level: 70 },
    { name: 'Tailwind', level: 50 },
    { name: 'Express', level: 10},
];

export default function Skills() {
    const fillsRef = useRef([]);

    useEffect(() => {
        // clear previous refs (in case of HMR / remounts)
        fillsRef.current = fillsRef.current.slice(0, skills.length);

        // animate fills with a stagger
        fillsRef.current.forEach((el, i) => {
            if (!el) return;
            const level = skills[i].level;
            const t = setTimeout(() => {
                el.style.width = `${level}%`;
            }, i * 120);

            // store timeout id so we can clear on cleanup
            el.__timeoutId = t;
        });

        return () => {
            // clear timeouts and refs on unmount
            fillsRef.current.forEach((el) => {
                if (el && el.__timeoutId) {
                    clearTimeout(el.__timeoutId);
                    delete el.__timeoutId;
                }
            });
            fillsRef.current = [];
        };
    }, []);

    return (
        <section className="skills section" id="skills">
            <div className="section__header">
                <h2>Skills</h2>
                <p>Tools and technologies I frequently use, progress shows comfort level.</p>
            </div>

            <div className="section__content">
                <div className="skills-grid">
                    {skills.map((skill, idx) => (
                        <div className="skill-card card" key={skill.name}>
                            <h3>{skill.name}</h3>

                            <div className="meter">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-valuenow={skill.level}
                                    aria-label={`${skill.name} skill level`}
                                >
                                    <div
                                        className="fill"
                                        ref={(el) => (fillsRef.current[idx] = el)}
                                        style={{ width: '0%' }}
                                    />
                                </div>

                                <div className="value">{skill.level}%</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
