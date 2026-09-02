import "../index.css"
function ProjectCard({project}){
 return (
    <div className="projectCard">
        <h3>{project.name}</h3>
        <p>{project.details}</p>
    </div>
 )
}
export default ProjectCard