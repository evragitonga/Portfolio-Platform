import useForm from "../hook/useForm";
function NewProjectForm({setList}){  
  const {formData,handleChange,resetFormData} = useForm({
    name:"",
    description:""
  })

  function handleSubmit(e){
        e.preventDefault()

        setList(prevList => ([...prevList,formData]))

        resetFormData()
    }
    return (
      <div className="formContainer">
          <form className="projectForm" onSubmit={handleSubmit}>
            <h4>Add Project</h4>
              <label htmlFor="title">Title</label>
              <input className="input" type="text" name="name" id="name" onChange={handleChange} value={formData.name} placeholder="Task Manager"/>

              <label htmlFor="description">Description</label>
              <textarea className="input" type="text" name="description" id="description" onChange={handleChange} value={formData.description} />

              <button type="submit">Add</button>

          </form>
      </div>
    )
}
export default NewProjectForm