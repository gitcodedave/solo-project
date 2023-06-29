import React from "react";
import BookmarkContainer from "/src/containers/BookmarkContainer.jsx"
import BookmarkCreator from "/src/components/BookmarkCreator.jsx"
import TabContainer from "/src/containers/TabContainer.jsx";
import { useState } from 'react';



export default function MainContainer(props){
    const [data, setData] = useState({
        tabs: [{ tabName: 'All', selected: true, bookmarks: []}],
    })

    const addTab = async function (input, link) {
        let newLink = ''
        for(let i = 0; i < link.length; i++){
            if(link[i - 3] + link[i - 2] + link[i - 1] + link[i] === '.com'){
                newLink = newLink + link[i];
                break;
            } 
            else newLink = newLink + link[i]
        }
        // let images = await fetch('https://www.nintendo.com/whatsnew/')
        //     .then(data => data.text())
        // console.log(images)
        let bookmarks = await fetch('https://www.nintendo.com/whatsnew/')
            .then(data => data.text())
            .then(html => {
                // Convert the HTML string into a document object
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, 'text/html')
                // Get the bookmark files
                const list = doc.querySelectorAll(`[aria-label*=${input.tabName} i]`)
                let bookmarkArray = []
                
                for(let value of list.values()){
                    let pageLink = newLink + value.pathname
                    //let imageUrl = value.getElementsByTagName('img')
                    bookmarkArray.push({url: pageLink})
                }
                
            return bookmarkArray
            })

        input.bookmarks = bookmarks;

        setData({
            ...data,
            tabs: [...data.tabs, input],
            // bookmarks: [...data.bookmarks, bookmarks]
        })

    }
    
    return (
        <div id='Main Container'>
         <BookmarkCreator addTab={addTab}></BookmarkCreator>   
         <TabContainer state={data.tabs}></TabContainer>
         <BookmarkContainer state={data.tabs}></BookmarkContainer>
         </div>
    )
}
