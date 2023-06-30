import React from "react";

export default function TabContainer(props){
    let tabArray = []
    const handleTabClick = function(tabName) {
        props.selectTab(tabName)
      }
    // console.log(props.state[props.state.length - 1])
    for(let i = 0; i < props.state.length; i++){
        tabArray.push(<button key={props.state[i].tabName + 'tab'} value={props.state[i].tabName} onClick={() => handleTabClick(props.state[i].tabName)}>{props.state[i].tabName}</button>)
    }
    return (
        <div id='tab list' className="tabList">
            {tabArray}
        </div>
    )
}
