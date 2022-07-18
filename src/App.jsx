import React, { useEffect } from "react"
import { useState } from "react";
//components
import Header from "./header/header";
import Footer from "./footer/footer";
import SecondaryBanner from './secondaryBanner/secondaryBanner';
import FAQ from "./FAQ/faq";
import MainBanner from "./mainBanner/mainBanner";
import Card from "./mainBanner/card";

// context
const Context = React.createContext();

function App() {
  const [loaded, setLoaded] = useState(false)
   
  useEffect(()=>{
    // todo set loading to true temporarily for now
    setLoaded(true);
  }, [])
  
  const contextData = {
  }

  if(loaded){
    return(
      <Context.Provider value={contextData}>
        <Header></Header>
        <MainBanner></MainBanner>
        <SecondaryBanner></SecondaryBanner>
        <FAQ></FAQ>
        <Footer></Footer>
        <Card></Card>
      </Context.Provider>
    )
  }
  else{return(
    <div>loading</div>
  )}
}
export default App
