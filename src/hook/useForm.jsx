import { useState } from "react"

function useForm(initialValues){
  const [formData,setFormData] = useState(initialValues)
  function handleChange(e){
    const {name,value} = e.target
    setFormData(prevFormData => ({...prevFormData,[name]:value}))

  }

  function resetFormData(){
    setFormData(initialValues)
  }
  return {formData,handleChange,resetFormData}

}
export default useForm