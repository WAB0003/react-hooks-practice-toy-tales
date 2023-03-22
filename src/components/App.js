import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const baseURL = "http://localhost:3001/toys/"


function App() {
  const [showForm, setShowForm] = useState(false);
  const[currentToys, setCurrentToys] = useState([])
  
  //!Fetch Toys array and set to current toys:
  useEffect(()=>{
    fetch(baseURL)
    .then(r=>r.json())
    .then(toysArray=>setCurrentToys(toysArray))
  },[])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //!funtion to handle a new Toy from the form:
  function handleNewToy(newToy){
    setCurrentToys((previousToyList)=>[...previousToyList,newToy])
  }

  //!function to render the page when item is delete:
  const handleDeleteToy = (deletedToy)=>{
    const updatedToyList = currentToys.filter((toy)=> toy.id !== deletedToy.id)
    setCurrentToys(updatedToyList)
  }

  const handleToyLikeBtn = (updatedToy) => {
    const updatedToyList = currentToys.map((toy)=>{
        if (toy.id===updatedToy.id) {
          return updatedToy;
        } else {
          return toy;
        }
    })

    setCurrentToys(updatedToyList)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm baseURL={baseURL} handleNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer currentToys={currentToys} baseURL={baseURL} handleDeleteToy={handleDeleteToy} handleToyLikeBtn={handleToyLikeBtn} />
    </>
  );
}

export default App;


//a toy to add
// name: Lego Man
// img: https://m.media-amazon.com/images/I/51fUD1buqxL._AC_SY741_.jpg