import React from "react";

export default function TabContainer(props){
    let tabArray = []
    for(let i = 0; i < props.state.length; i++){
        console.log(props.state)
        tabArray.push(<li>{props.state[i]}</li>)
    }
    return (
        <ul className="tabList">
            {tabArray}
        </ul>
    )
}
