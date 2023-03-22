import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({currentToys, baseURL, handleDeleteToy, handleToyLikeBtn}) {

  const toysToDisplay = currentToys.map((toy)=>{
   return <ToyCard key={toy.id} toy={toy} baseURL={baseURL} handleDeleteToy={handleDeleteToy} handleToyLikeBtn={handleToyLikeBtn} />
  })

  return (
    <div id="toy-collection">
      {toysToDisplay}
    </div>
  );
}

export default ToyContainer;
