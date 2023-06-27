import React from "react";
import BookmarkContainer from "/src/containers/BookmarkContainer.jsx"
import BookmarkCreator from "/src/components/BookmarkCreator.jsx"
import TabContainer from "/src/containers/TabContainer.jsx";
import { useState } from 'react';



export default function MainContainer(props){
    const [tabs, setTabs] = useState(['All'])
    const addTab = function (input) {
        setTabs((prevTabs) => [...prevTabs, input])
    }
    return (
        <div>
         <BookmarkCreator func={addTab}></BookmarkCreator>   
         <TabContainer state={tabs}></TabContainer>
         <BookmarkContainer></BookmarkContainer>
         </div>
    )
}
