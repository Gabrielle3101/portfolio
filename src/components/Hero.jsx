// Hero.jsx
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const el = document.querySelector('.hero .abstract-bg img');
    if (!el) return;
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } });
    tl.to(el, { y: 22, duration: 2.8 }).to(el, { y: 6, duration: 2.8 });
    return () => tl.kill();
  }, []);

  return (
    <section className="hero">
      <h1>
        Hi, I'm{' '}
        <span className="monospace">
          <Typewriter
            options={{
              strings: ['Gabrielle Duere', 'a Frontend Engineer', 'just a girl'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      <p>New here? I’ll show you my work and how I build things.</p>

      <div className="cta">
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          aria-label="View Projects"
        >
          View Projects
        </button>
      </div>

      <div className="abstract-bg" aria-hidden="true">
        <img src="/assets/images/image.png" alt="" />
      </div>
    </section>
  );
}
