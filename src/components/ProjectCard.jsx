import "../index.css"
function ProjectCard({project}){
 return (
    <div className="projectCard">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
    </div>
 )
}
export default ProjectCard