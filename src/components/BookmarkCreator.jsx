import React from "react"
// import {addTab} from '/src/containers/TabContainer.jsx'

export default function BookmarkCreator(props){
  let topicState = ''


  const handleChange = function(event){
    topicState = event.target.value;
  }

  const handleClick = function(){
    props.func(topicState)
    // console.log(topicState)
    let allForms = document.querySelectorAll('input');
    allForms.forEach(eachInput => eachInput.value = '');
  }
  return (
        <div>
        <input placeholder="New Topic" onChange={handleChange} ></input>
        <input placeholder="Paste URL"></input>
        <button onClick={handleClick}>ADD TOPIC</button>
        </div>
  )
}