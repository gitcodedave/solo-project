import React from "react"
// import {addTab} from '/src/containers/TabContainer.jsx'

export default function BookmarkCreator(props){
  let topicState = ''
  let urlState = ''


  const handleTabChange = function(event){
    topicState = event.target.value;
  }

  const handleURLChange = function(event){
    urlState = event.target.value;
  }

  const handleAddTabClick = function(){
    props.addTab({ tabName: topicState, selected: false}, urlState)
    // console.log(topicState)
    let allForms = document.querySelectorAll('input');
    allForms.forEach(eachInput => eachInput.value = '');
  }
  
  return (
        <div id='Bookmark Creator' className="bookmarkCreator">
        <input size="20" placeholder="New Topic" onChange={handleTabChange} ></input>
        <input size="50" placeholder="Paste URL" onChange={handleURLChange}></input>
        <button className="submitButton" onClick={handleAddTabClick}>Submit</button>
        </div>
  )
}