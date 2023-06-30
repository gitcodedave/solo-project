import React from "react"

export default function BookmarkContainer(props){
    let bookmarkArray = []
    for(let i = 0; i < props.state.length; i++){
        if(props.state[0].selected === true){
            for(let bookmark of props.state[i].bookmarks){
                let block = <div className="bookmark">
                            <img src='https://cdn.mos.cms.futurecdn.net/QqSBXWSJeQX69ZoBRoneJd.jpg'
                                width='250'></img>
                            <h2>{bookmark.title}</h2>
                            <h4>{bookmark.description}</h4>    
                            </div>
                bookmarkArray.push(block)
            }
        } else {
              if(props.state[i].selected === true){
                for(let bookmark of props.state[i].bookmarks){
                    let block = <div className="bookmark">
                                <img src='https://cdn.mos.cms.futurecdn.net/QqSBXWSJeQX69ZoBRoneJd.jpg'
                                    width='250'></img>
                                <h2>{bookmark.title}</h2>
                                <h4>{bookmark.description}</h4>    
                                </div>
                    bookmarkArray.push(block)
                }
            }
        }
    }
    return (
        <div id='bookmark list' className='bookmarks'>
            {bookmarkArray}
        </div>
    )
    
}