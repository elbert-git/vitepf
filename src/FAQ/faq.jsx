import {useState } from "react";
import Accordion from "./accordion";
import './faq.css';

const faqArray=
[
  ['QuestionText', <div>VeeFriends is the name of Gary Vaynerchuk's NFT collection. He created VeeFriends to bring to life his ambitions of building a community around his creative and business passions using NFT technology and their smart contract capabilities. By owning a VeeFriend NFT, you immediately become part of the VeeFriends community and get access to VeeCon.</div>],
  ['QuestionText', <div>VeeFriends is the name of Gary Vaynerchuk's NFT collection. He created VeeFriends to bring to life his ambitions of building a community around his creative and business passions using NFT technology and their smart contract capabilities. By owning a VeeFriend NFT, you immediately become part of the VeeFriends community and get access to VeeCon.</div>],
  ['QuestionText', <div>VeeFriends is the name of Gary Vaynerchuk's NFT collection. He created VeeFriends to bring to life his ambitions of building a community around his creative and business passions using NFT technology and their smart contract capabilities. By owning a VeeFriend NFT, you immediately become part of the VeeFriends community and get access to VeeCon.</div>],
  ['QuestionText', <div>VeeFriends is the name of Gary Vaynerchuk's NFT collection. He created VeeFriends to bring to life his ambitions of building a community around his creative and business passions using NFT technology and their smart contract capabilities. By owning a VeeFriend NFT, you immediately become part of the VeeFriends community and get access to VeeCon.</div>],
  ['QuestionText', <div>VeeFriends is the name of Gary Vaynerchuk's NFT collection. He created VeeFriends to bring to life his ambitions of building a community around his creative and business passions using NFT technology and their smart contract capabilities. By owning a VeeFriend NFT, you immediately become part of the VeeFriends community and get access to VeeCon.</div>],
]

export default function FAQ(){
  const [activeQuestion, setActiveQuestion] = useState([...Array(faqArray.length).fill(true)])
   
  let idCount = -1

  const toggleFaqs = (id)=>{
    if(activeQuestion[id]){
      // change state
      let newArray = [...activeQuestion];
      newArray.fill(true)
      newArray[id] = false;
      setActiveQuestion(newArray)
    } 
    else{
      // change state
      let newArray = [...activeQuestion];
      newArray.fill(true)
      setActiveQuestion(newArray)
    }

  }

  return(
    <div className="FAQRoot flex flexJustifyCenter">
      <div className="FAQ constrainWidth">
        <div className="FAQTitle">Frequently Asked Questions</div>
        {faqArray.map(val=>{
          idCount += 1;
          return <Accordion toggleFunc={toggleFaqs} title={val[0]} id={idCount} key={idCount} collapse={activeQuestion[idCount]}>{val[1]}</Accordion>
        })}
      </div>
    </div>
  )
}