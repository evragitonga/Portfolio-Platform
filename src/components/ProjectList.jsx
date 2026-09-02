import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "../index.css"

const projects = [
  {
    name: "E-Commerce Website",
    details: "An online shopping website where users can browse products, search, filter, and add products to a cart."
  },
  {
    name: "Event Planner",
    details: "An application that allows users to create, view, edit, and delete events."
  },
  {
    name: "Book Library",
    details: "An application for managing a collection of books, including adding, searching, and removing books."
  },
  {
    name: "Job Board",
    details: "A platform where users can view available jobs, search for positions, and filter jobs by category."
  },
  {
    name: "Movie Watchlist",
    details: "An application where users can browse movies and add their favorite movies to a watchlist."
  },
  {
    name: "Travel Planner",
    details: "A website that helps users organize trips by creating destinations, activities, and travel plans."
  },
  {
    name: "Music Library",
    details: "An application where users can browse songs, search for music, and create a list of favorite songs."
  },
  {
    name: "Course Manager",
    details: "A system for managing courses, including viewing, adding, and removing courses."
  },
  {
    name: "Fitness Tracker",
    details: "An application for tracking workouts, exercises, and fitness activities."
  },
  {
    name: "Restaurant Finder",
    details: "A website where users can search for restaurants and filter them by cuisine or rating."
  },
  {
    name: "Portfolio Builder",
    details: "An application that allows users to create and organize their personal projects and professional information."
  },
  {
    name: "Study Planner",
    details: "An application that helps students organize subjects, study sessions, and learning goals."
  },
  {
    name: "Inventory Manager",
    details: "A system for managing products, stock levels, categories, and inventory information."
  },
  {
    name: "Car Rental System",
    details: "A website where users can browse available cars and manage rental reservations."
  },
  {
    name: "News Dashboard",
    details: "An application that displays news articles and allows users to search and filter articles."
  },
  {
    name: "Donation Platform",
    details: "A website where users can view charitable projects and manage donation information."
  },
  {
    name: "Project Management App",
    details: "An application for creating projects, assigning tasks, and tracking project progress."
  },
  {
    name: "Pet Care Manager",
    details: "An application for keeping track of pets, activities, appointments, and care information."
  },
  {
    name: "Recipe Finder",
    details: "A website where users can search for recipes and view information about different meals."
  },
  {
    name: "Task Manager",
    details: "An application where users can create, update, complete, and delete tasks."
  }
];

function ProjectList(){
    const [List,setList] = useState(projects)
    const [projectDetails,setProjectDetails] = useState({
        name:"",
        details:""
    })
    const [search,setSearch] = useState("")

   

    function handleChange(e){
        
        const {name,value} = e.target

        //console.log(name)
        //console.log(value)

        setProjectDetails(prevProjectDetails => ({...prevProjectDetails,[name]:value}))
    }


    function handleSubmit(e){
        e.preventDefault()

        setList(prevList => ([...prevList,projectDetails]))

        setProjectDetails({
            name:"",
            details:""
        })
    }

    const filteredProjects = List.filter(project => {
        return project.name.toLowerCase().includes(search.toLowerCase())})

    return (
        <div>
            <div className="formContainer">
                <form className="projectForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Project Name</label>
                    <input className="input" type="text" name="name" id="name" onChange={handleChange} value={projectDetails.name} placeholder="Task Manager"/>

                    <label htmlFor="details">Project Details</label>
                    <textarea className="input" type="text" name="details" id="details" onChange={handleChange} value={projectDetails.details} />

                    <button type="submit">Add Project</button>

                </form>
            </div>
            <div className="container1">
                <div className="searchContainer">
                    <input className="input" type="text" value={search} placeholder="Search"  onChange={(e) => setSearch(e.target.value)}/>    
                </div>   
                <div className="projectCardsContainer">    
                    {filteredProjects.length > 0 && filteredProjects.map(project => (<ProjectCard project={project}/>))}
                </div>
            </div>
        </div>
    )
}
export default ProjectList