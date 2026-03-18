import { PROJECTS, SECTION } from '../component/constant';

const Projects = () => {
	return (
		<section id="projects" className="section projects-section">
			<div className="container">
				<div className="section-heading-wrap">
					<span className="section-kicker">{SECTION.PROJECTS.kicker}</span>
					<h2 className="section-title">{SECTION.PROJECTS.title}</h2>
				</div>
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
											{SECTION.PROJECTS.githubLabel}
										</a>
									)}
									{project.demo && (
										<a href={project.demo} target="_blank" rel="noopener noreferrer">
											{SECTION.PROJECTS.demoLabel}
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
