import React from "react"
import styles from "./styles.css"
import photogrid from "../images/photogrid.png"

export default function Hero(){
    return(
        <section>
            <img src={photogrid} className={"img2"}/>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--para">
                Join unique interactive activities led by
                one-of-a-kind hosts-all with leaving home.
            </p>
        </section>
    )
}