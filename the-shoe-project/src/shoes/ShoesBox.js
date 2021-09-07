import * as React from "react";

export default function ShoesBox (props){
    const {name, image, size} = props;


    return (
        <div className="shoesBoxContainer">
            <img className="shoesImage" src={props.image}/>
            <div className="shoesName">{props.name}</div>
            <div className="shoesSize">Marime: {props.size}</div>
        </div>
    )
}