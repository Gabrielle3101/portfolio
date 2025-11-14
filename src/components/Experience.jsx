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
                                Contributed to the company marketing site and internal dashboards. Focused on component design,
                                accessibility fixes, and improving cross-browser reliability.
                            </p>

                            <ul>
                                <li>Built reusable React components and a simple design system used across 6 pages.</li>
                                <li>Implemented responsive layouts and improved Lighthouse performance scores by ~18%.</li>
                                <li>Added semantic HTML and ARIA attributes to improve accessibility test results.</li>
                            </ul>

                            <p className="meta"><strong>Tech</strong>: React, Sass, Webpack, Lighthouse</p>
                        </div>
                    </article>

                    <article className="timeline-item card" aria-labelledby="exp-pipeops">
                        <div>
                            <h3 id="exp-pipeops">PipeOps</h3>
                            <div className="meta">Frontend Intern — Sep 2025 – Nov 2025</div>
                        </div>

                        <div>
                            <p>
                                Worked on new UI features for a logistics dashboard, focusing on real-time data displays and UX flows
                                for dispatchers. Helped reduce task completion time through UI improvements.
                            </p>

                            <ul>
                                <li>Implemented real-time charts and status indicators using WebSockets and optimized render loops.</li>
                                <li>Led the refactor of the tasks list to virtualized rendering, cutting CPU usage on large lists by ~60%.</li>
                                <li>Collaborated with backend engineers to design an efficient client caching strategy.</li>
                            </ul>

                            <p className="meta"><strong>Tech</strong>: React, GSAP, WebSockets, React-Window, Sass</p>
                        </div>
                    </article>

                    <article className="timeline-item card" aria-labelledby="exp-freelance">
                        <div>
                            <h3 id="exp-freelance">Freelance Projects</h3>
                            <div className="meta">2023 – Present</div>
                        </div>

                        <div>
                            <p>
                                Delivered production websites and micro-apps for small businesses and personal brands. Focused on
                                performance, maintainability, and design polish.
                            </p>

                            <ul>
                                <li>Designed and shipped a portfolio site with Lottie hero animation and CMS-powered blog.</li>
                                <li>Built an e-commerce landing page with optimized images and critical CSS, improving TTFB and CLS.</li>
                                <li>Provided ongoing front-end maintenance and performance audits for clients.</li>
                            </ul>

                            <p className="meta"><strong>Tech</strong>: React, Next.js, Lottie, GSAP, Netlify/Vercel, Sass</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
