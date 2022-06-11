import React from "react"

import star from "../images/star.png"

export default function Card(props){
    console.log(props)
    return(
        <div className="div1">
            <img src={`..public/images/${props.img}`}   className="katie1"/>
            <div className="card-stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewcount}) </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} / person</p>
        </div>
    )
}