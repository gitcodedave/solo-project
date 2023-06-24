import React from "react"
// import Bookmark from "../components/Bookmark.jsx"

function Bookmark (){
    return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png"></img>
    )
}

export default function BookmarkContainer(props){
    return (
       <Bookmark></Bookmark>
    )
}