import React from "react"


export default function BookmarkContainer(props){
    for(let i = 0; i < props.state.length; i++){
        for(let bookmark of props.state[i].bookmarks)
        console.log(bookmark.url)
    }
    
    return (
        <div id='bookmark list' className="BookmarkList">
            {'nothing'}
        </div>
    )
}