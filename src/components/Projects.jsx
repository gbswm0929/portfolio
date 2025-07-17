import projects from "../store/projects"
import ProjectCard from "../components/organisms/ProjectCard"

function Projects() {
    return (
        <p>
            {projects.map(datas => (
                <ProjectCard datas={datas} />
            ))}
        </p>
    )
}

export default Projects