import React from "react"

let topicState = ''
let allInputs = document.querySelectorAll('input');
allInputs.forEach(singleInput => singleInput.value = '');
const handleChange = function(event){
    topicState = event.target.value;
}

const handleClick = function(){

    topicState = ''
}

export default function BookmarkCreator(props){
    return (
        <div>
        <input placeholder="New Topic" onChange={handleChange} ></input>
        <input placeholder="Paste URL"></input>
        <button onClick={handleClick}>ADD TOPIC</button>
        </div>
     )
}

export {topicState}