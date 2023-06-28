import React from "react";
import BookmarkContainer from "/src/containers/BookmarkContainer.jsx"
import BookmarkCreator from "/src/components/BookmarkCreator.jsx"
import TabContainer from "/src/containers/TabContainer.jsx";
import { useState } from 'react';



export default function MainContainer(props){
   

    const [data, setData] = useState({
        tabs: [{ tabName: 'All', selected: true}],
        bookmarks: []
    })

    const addTab = async function (input) {
        let bookmarks = await fetch('https://www.nintendo.com/whatsnew/')
            .then(data => data.text())
            .then(html =>{
                // Convert the HTML string into a document object
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, 'text/html')
        
                // Get the bookmark files
                const allBookmarks = doc.querySelectorAll('h2')
                let bookmarkArray = []
                for(let value of allBookmarks.values()){
                    let htmlText = value.innerHTML.toLowerCase()
                    if(htmlText.includes(input.tabName)) bookmarkArray.push(htmlText)
                    // if(htmlText.includes('mario')) marioBookmark.push(value)
                }
                return bookmarkArray
            })
        setData({
            ...data,
            tabs: [...data.tabs, input],
            bookmarks: [...data.bookmarks, bookmarks]
        })
        console.log(bookmarks)
    }
    return (
        <div id='Main Container'>
         <BookmarkCreator func={addTab}></BookmarkCreator>   
         <TabContainer state={data.tabs}></TabContainer>
         <BookmarkContainer></BookmarkContainer>
         </div>
    )
}
