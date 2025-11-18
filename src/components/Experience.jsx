// Experience.jsx
export default function Experience() {
    return (
        <section className="experience section" id="experience">
            <div className="section__header">
                <h2>Experience</h2>
                <p>Selected roles where I shipped product features, improved performance, and built scalable front-end systems.</p>
            </div>

            <div className="section__content">
                <div className="timeline">
                    <article className="timeline-item card" aria-labelledby="exp-ukdion">
                        <div>
                            <h3 id="exp-ukdion">UK Dion Investments Ltd</h3>
                            <div className="meta">Frontend Intern — Sep 2021 – Feb 2022</div>
                        </div>

                        <div>
                            <p>
                                My first hands-on experience as a web developer. I learned the basics of HTML, CSS, and JavaScript,
                                and contributed to internal tools and marketing pages under supervision.
                            </p>

                            <ul>
                                <li>Assisted in building static pages and simple interactive components.</li>
                                <li>Practiced responsive design and layout structuring using Flexbox and Grid.</li>
                                <li>Learned version control basics and collaborated using Git.</li>
                            </ul>

                            <p className="meta"><strong>Tech</strong>: HTML, CSS, JavaScript</p>
                        </div>
                    </article>

                    <article className="timeline-item card" aria-labelledby="exp-pipeops">
                        <div>
                            <h3 id="exp-pipeops">PipeOps</h3>
                            <div className="meta">Frontend Intern — Sep 2025 – Nov 2025</div>
                        </div>

                        <div>
                            <p>
                                Completed my SIWES internship, where I built and demoed multiple React apps and delivered a final project:
                                an AI-powered decision-maker app for food and entertainment suggestions.
                            </p>

                            <ul>
                                <li>Built React apps with routing, state management, and responsive UI.</li>
                                <li>Designed and implemented the “What Should I Eat/Watch” app with randomized and AI-driven logic.</li>
                                <li>Documented weekly progress and demoed final project to the team.</li>
                            </ul>

                            <p className="meta"><strong>Tech</strong>: React, JavaScript, Tailwind CSS</p>
                        </div>
                    </article>

                    <article className="timeline-item card" aria-labelledby="exp-freelance">
                        <div>
                            <h3 id="exp-freelance">Freelance Projects</h3>
                            <div className="meta">2023 – Present</div>
                        </div>

                        <div>
                            <p>
                                Delivered websites and micro-apps for small businesses and individuals. Focused on clean design,
                                performance, and maintainability.
                            </p>

                            <ul>
                                <li>Built portfolio sites, landing pages, and interactive forms using React and modern styling tools.</li>
                                <li>Improved performance scores through image optimization and layout tuning.</li>
                                <li>Provided ongoing updates and support for client projects.</li>
                            </ul>

                            <p className="meta"><strong>Tech</strong>: React, Tailwind CSS, Netlify, Sass</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
