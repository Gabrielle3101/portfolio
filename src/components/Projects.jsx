// Projects.jsx
const projects = [
    {
        title: 'Piqr',
        image: '/assets/images/piqr.png',
        demo: 'https://piqr.netlify.app',
        github: 'https://github.com/Gabrielle3101/piqr',
    },
    {
        title: 'Weather App',
        image: '/assets/images/weather.png',
        demo: 'https://weatherfm.netlify.app',
        github: 'https://github.com/Gabrielle3101/weather-app',
    },
    {
        title: 'Todo App',
        image: '/assets/images/todo.png',
        demo: 'https://todofmgd.netlify.app',
        github: 'https://github.com/Gabrielle3101/todo-app',
    },
    {
        title: 'Rest Countries API',
        image: '/assets/images/rest.png',
        demo: 'https://gabbie-rest-countries-api.netlify.app',
        github: 'https://github.com/Gabrielle3101/rest-countries-api',
    },
    ];

    export default function Projects() {
    return (
        <section className="projects" id="projects">
        <div className="section__header">
        <h2>Recent Projects</h2>
        <p className="lead">A curated set of recent projects each includes a live demo, source code, and a short note on the problem solved, tech used, and performance or accessibility improvements.</p>
    </div>
        <div className="project-grid">
            {projects.map(project => (
            <div className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}