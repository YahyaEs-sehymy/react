import React, { useState } from "react"; 
export default function Inscription(){ 
    const [nom,setNom]=useState() 
    const [prenom,setPrenom]=useState()
     const [information,setInformation]=useState()
      function envoyer(){
         setInformation(`nom:${nom} prenom:${prenom}`)
         } 
         return(
             <div> 
      <h2></h2>
       <div>
        <label>Nom:</label>
        <input type="text" onChange={(e)=>{setNom(e.target.value.toUpperCase())}}/>
    </div>
        <div>
            <label>Prenom:</label>
            <input type="text" onChange={(e)=>{setPrenom(e.target.value.toUpperCase())}}/> 
        </div> 
        <button onClick={envoyer}>Afficher</button>
        <p>{information}</p>
       </div> 
    ) 
  }