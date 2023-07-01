import React from "react"
import { imageArray } from "../../images/images"

export default function BookmarkContainer(props){
    let bookmarkArray = []
    for(let i = 0; i < props.state.length; i++){
        if(props.state[0].selected === true){
            for(let bookmark of props.state[i].bookmarks){
                let imageLink = ''
                for(let j = 0; j < imageArray.length; j++){
                    if(bookmark.title === imageArray[j].title){
                        imageLink = imageArray[j].link;
                        break;
                    } else {
                        imageLink = 'https://cdn.mos.cms.futurecdn.net/QqSBXWSJeQX69ZoBRoneJd.jpg'
                    }
                }
                let block = <div className="bookmark">
                            <a href={bookmark.url} target="_blank"><img src={imageLink}
                                width='250'></img></a>
                            <h3>{bookmark.date}</h3>
                            <h2><a href={bookmark.url} target="_blank">{bookmark.title}</a></h2>
                            <h4><a href={bookmark.url} target="_blank">{bookmark.description}</a></h4>   
                            </div>
                bookmarkArray.push(block)
            }
        } else {
              if(props.state[i].selected === true){
                for(let bookmark of props.state[i].bookmarks){
                    let imageLink = ''
                    for(let j = 0; j < imageArray.length; j++){
                        if(bookmark.title === imageArray[j].title){
                            imageLink = imageArray[j].link;
                            break;
                     } else {
                        imageLink = 'https://cdn.mos.cms.futurecdn.net/QqSBXWSJeQX69ZoBRoneJd.jpg'
                    }
                }
                    let block = <div className="bookmark">
                                <a href={bookmark.url} target="_blank"><img src={imageLink}
                                    width='250'></img></a>
                                <h3>{bookmark.date}</h3>
                                <h2><a href={bookmark.url} target="_blank">{bookmark.title}</a></h2>
                                <h4><a href={bookmark.url} target="_blank">{bookmark.description}</a></h4>    
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