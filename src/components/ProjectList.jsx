import { useState } from "react";
import "../index.css"
import NewProjectForm from "./NewProjectForm";
import FilteredProjects from "./FilteredProjects";
const projects = [
  {
    name: "E-Commerce Website",
    description: "An online shopping website where users can browse products, search, filter, and add products to a cart."
  },
  {
    name: "Event Planner",
    description: "An application that allows users to create, view, edit, and delete events."
  },
  {
    name: "Book Library",
    description: "An application for managing a collection of books, including adding, searching, and removing books."
  },
  {
    name: "Job Board",
    description: "A platform where users can view available jobs, search for positions, and filter jobs by category."
  },
  {
    name: "Movie Watchlist",
    description: "An application where users can browse movies and add their favorite movies to a watchlist."
  },
  {
    name: "Travel Planner",
    description: "A website that helps users organize trips by creating destinations, activities, and travel plans."
  },
  {
    name: "Music Library",
    description: "An application where users can browse songs, search for music, and create a list of favorite songs."
  },
  {
    name: "Course Manager",
    description: "A system for managing courses, including viewing, adding, and removing courses."
  },
  {
    name: "Fitness Tracker",
    description: "An application for tracking workouts, exercises, and fitness activities."
  },
  {
    name: "Restaurant Finder",
    description: "A website where users can search for restaurants and filter them by cuisine or rating."
  },
  {
    name: "Portfolio Builder",
    description: "An application that allows users to create and organize their personal projects and professional information."
  },
  {
    name: "Study Planner",
    description: "An application that helps students organize subjects, study sessions, and learning goals."
  },
  {
    name: "Inventory Manager",
    description: "A system for managing products, stock levels, categories, and inventory information."
  },
  {
    name: "Car Rental System",
    description: "A website where users can browse available cars and manage rental reservations."
  },
  {
    name: "News Dashboard",
    description: "An application that displays news articles and allows users to search and filter articles."
  },
  {
    name: "Donation Platform",
    description: "A website where users can view charitable projects and manage donation information."
  },
  {
    name: "Project Management App",
    description: "An application for creating projects, assigning tasks, and tracking project progress."
  },
  {
    name: "Pet Care Manager",
    description: "An application for keeping track of pets, activities, appointments, and care information."
  },
  {
    name: "Recipe Finder",
    description: "A website where users can search for recipes and view information about different meals."
  },
  {
    name: "Task Manager",
    description: "An application where users can create, update, complete, and delete tasks."
  }
];

function ProjectList(){
    const [list,setList] = useState(projects)

    return ( 
        <div>  
            <NewProjectForm setList={setList}/>
            <FilteredProjects list={list}/>
        </div>
    )
}
export default ProjectList