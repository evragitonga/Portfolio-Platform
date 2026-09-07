import SearchBar from "./SearchBar"
import { useState } from "react"
import ProjectCard from "./ProjectCard"

function FilteredProjects({list}){
  const [search,setSearch] = useState("")
  
  const filteredProjects = list.filter(project => {
    return project.name.toLowerCase().includes(search.toLowerCase())})

  return (
    <section className="section">
      <div className="searchBarAndProjectCardsContainer">
        <div className="searchContainer">
          <SearchBar search={search} setSearch={setSearch}/>
        </div>
        <div className="projectCardsContainer">    
              {filteredProjects.length > 0 && filteredProjects.map(project => (<ProjectCard  project={project}/>))}
        </div>
      </div>
    </section>
  )
}
export default FilteredProjects