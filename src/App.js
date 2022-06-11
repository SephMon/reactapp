import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import katie from './images/katie.png'
export default function App(){
    return(

        <div>
            <Navbar />
            <Hero />
            <Card
                img={katie}
                rating={5.0}
                reviewcount={6}
                country="usa"
                title="Life lessons from Katie Zaferes"
                price={138}
            />

        </div>
    )
}