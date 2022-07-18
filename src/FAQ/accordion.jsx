import React,{ useEffect, useState } from "react"

export default function Accordion(prop){
  const collapse = prop.collapse;
   
  const questionStyle = ()=>{return {fontWeight:"500", color: collapse ? "black":"#08d43f"}} 
  const arrowStyle = ()=>{return {stroke: collapse ? "black":"green", transform:collapse?"rotate(0deg)":"rotate(-90deg)"}} 

  return(
    <div className="accordion">
      <div onClick={()=>{prop.toggleFunc(prop.id)}} className="hoverGreen flex flexJustifyBetween flexAlignCenter">
        <div className="transition questionText" style={questionStyle()}>{prop.title}</div>
        <svg style={arrowStyle()} className="transition arrow" width="547" height="954" viewBox="0 0 547 954" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M466.438 80.2776L88.3435 458.372C78.1899 468.526 78.1899 484.988 88.3435 495.142L466.438 873.237" strokeWidth="160" strokeLinecap="round"/>
        </svg>
      </div>
      {
        React.Children.map(prop.children, (child)=>{
          return React.cloneElement(child,{
            style: {transition: "0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)", overflow:"hidden", maxHeight: collapse ? "0px":"100px"}
        })})
      }
    </div>
  )
}