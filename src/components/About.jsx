import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const portraitRef = useRef(null);
    const copyRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const portrait = portraitRef.current;
        const copy = copyRef.current;

        if (!section || !portrait || !copy) return;

        const portraitAnim = gsap.fromTo(
            portrait,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        const copyAnim = gsap.fromTo(
            copy,
            { opacity: 0, x: 40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.9,
                delay: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        return () => {
            portraitAnim.kill();
            copyAnim.kill();
            ScrollTrigger.getAll().forEach((st) => {
                if (st.trigger === section) st.kill();
            });
        };
    }, []);

    function scrollToSection(id) {
        const t = document.getElementById(id);
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="section__content container">
                <div className="portrait">
                    <img ref={portraitRef} src="/assets/images/self.png" alt="Gabrielle Duere" />
                </div>

                <div className="copy" ref={copyRef}>
                    <div className="section__header">
                        <h2>About Me</h2>
                    </div>
                    <p>
                        I’m a frontend engineer who builds thoughtful, accessible user interfaces that solve real problems. I care about clean code, polished interactions, and performance, and I enjoy turning complex requirements into simple, delightful experiences users can trust.
                    </p>

                    <div className="actions">
                        <a className="button" href="#projects" onClick={() => scrollToSection('projects')}>View Projects</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
