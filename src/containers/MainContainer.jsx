import React from "react";
import BookmarkContainer from "/src/containers/BookmarkContainer.jsx"
import BookmarkCreator from "/src/components/BookmarkCreator.jsx"
import TabContainer from "/src/containers/TabContainer.jsx";
import { useState } from 'react';

/*Data template object:
data: 
   { tabs: [{ 
        tabName: '',
        selected: true,
        bookmarks: [{ 
            url: '',
            title: '',
            description: '' 
        }]
    }]
}
*/

export default function MainContainer(props){
    const [data, setData] = useState({
        tabs: [{ tabName: 'All', selected: true, bookmarks: []}],
    })

    const selectTab = function(tabName){
        let newData = [...data.tabs]
        for(let i = 0; i < newData.length; i++){
            if(newData[i].selected === true) newData[i].selected = false
            else if(newData[i].tabName === tabName) newData[i].selected = true
        }
        setData(data => ({
            // Retain the existing values
            ...data,
            // update the current field
            tabs: newData
          }))
    }
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
                const list = doc.querySelectorAll(`[aria-label*="${input.tabName}" i]`)
                let bookmarkArray = []
                
                for(let value of list.values()){
                    let pageLink = newLink + value.pathname
                    let pageTitle = value.ariaLabel;
                    let description = value.lastChild.lastChild.childNodes[2].innerText
                    let date = value.lastChild.lastChild.childNodes[0].innerText;
                    // console.log(date)
                    if(description !== 'Read more') description = description + ' Read more'
                    //let imageUrl = value.getElementsByTagName('img')
                    bookmarkArray.push({url: pageLink, title: pageTitle, description: description, date: date})
                }
                
            return bookmarkArray
            })

        input.bookmarks = bookmarks;
        
        setData({
            tabs: [...data.tabs, input],
            // bookmarks: [...data.bookmarks, bookmarks]
        })

    }
    
    return (
        <div id='Main Container'>
         <BookmarkCreator addTab={addTab}></BookmarkCreator>   
         <TabContainer state={data.tabs} selectTab={selectTab}></TabContainer>
         <BookmarkContainer state={data.tabs}></BookmarkContainer>
         </div>
    )
}
