import React from "react";
import BookmarkContainer from "/src/containers/BookmarkContainer.jsx"
import BookmarkCreator from "/src/components/BookmarkCreator.jsx"
import TabContainer from "/src/containers/TabContainer.jsx";




export default function MainContainer(props){
   
    return (
        <div>
         <BookmarkCreator></BookmarkCreator>   
         <TabContainer></TabContainer>
         <BookmarkContainer></BookmarkContainer>
         </div>
    )
}
