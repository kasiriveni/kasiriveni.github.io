import { PROJECTS } from '../component/constant';

const Projects = () => {
	return (
		<section id="projects" className="section projects-section">
			<div className="container">
				<h2 className="section-title">Projects</h2>
				<div className="projects-grid">
					{PROJECTS.map((project) => (
						<article key={project.id} className="project-card">
							<div className={`project-thumb project-thumb-${project.theme || 'ocean'}`}>
								<div className="project-window" aria-hidden="true">
									<div className="project-window-bar" />
									<div className="project-window-layout">
										<span />
										<span />
										<span />
									</div>
								</div>
							</div>
							<div className="project-body">
								<h3 className="project-title">{project.name}</h3>
								<p className="project-description">{project.description}</p>
								<ul className="project-tech">
									{project.tech.map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>
								<div className="project-links">
									{project.github && (
										<a href={project.github} target="_blank" rel="noopener noreferrer">
											GitHub
										</a>
									)}
									{project.demo && (
										<a href={project.demo} target="_blank" rel="noopener noreferrer">
											Live Demo
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
