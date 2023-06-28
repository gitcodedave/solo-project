import React from "react"
// import {addTab} from '/src/containers/TabContainer.jsx'

export default function BookmarkCreator(props){
  let topicState = ''


  const handleChange = function(event){
    topicState = event.target.value;
  }

  const handleAddTopicClick = function(){
    props.func({ tabName: topicState, selected: false})
    // console.log(topicState)
    let allForms = document.querySelectorAll('input');
    allForms.forEach(eachInput => eachInput.value = '');
  }
  return (
        <div id='Bookmark Creator'>
        <input placeholder="New Topic" onChange={handleChange} ></input>
        <input placeholder="Paste URL"></input>
        <button onClick={handleAddTopicClick}>ADD TOPIC</button>
        </div>
  )
}