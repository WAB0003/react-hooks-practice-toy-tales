import React, { useState } from "react";

function ToyForm({baseURL, handleNewToy}) {

//!Create state to manage values of onChange Events when typing into inputs
const [formData,setFormData] = useState({
  name: "",
  image: "",
})

//*Create a function to handle form changes
const handleFormChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
}

//*Create a new variable that handles form Data and puts it into usable ToyObject
const newToy = {
  name:formData.name,
  image:formData.image,
  likes:0,
}

//! create a functio to handle the actual submit:
const handleSubmit = (e) => {
  e.preventDefault()

  //*persist added toy to database
  fetch(baseURL,{
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(newToy)
  })
  .then((r)=>r.json())
  .then((newToy)=>handleNewToy(newToy))

  setFormData({
    name:"",
    image:""
  })
  
}




  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {formData.name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {formData.image}
          onChange = {handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
