import React from "react";

function ToyCard({toy, baseURL, handleDeleteToy, handleToyLikeBtn}) {
const {name, image, likes} = toy

//!Create a click event function for handleing the delete
const handleDeleteClick = () =>{
  fetch(baseURL+toy.id, {
    method: "DELETE",
  })
  .then((r)=>r.json())
  .then(()=>handleDeleteToy(toy)) //toy in this case is taken when the item is clicked. The item is gone from data base when Delete method is called
}

//!Create a function to handle update Like click
const handleLikeClick = (e) =>{
  const updatedLikes = likes+1
  console.log(toy.id)
  console.log(updatedLikes)

  fetch(baseURL+toy.id, {
    method: "PATCH",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify({
      likes: likes+1,
    })
  })
  .then((r)=>r.json())
  .then((updatedToy)=>handleToyLikeBtn(updatedToy))
}

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
