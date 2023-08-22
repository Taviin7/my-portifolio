import React from "react";
import "./Card.css";


export default function Card({
    Img,
    Name,
    Desciption,
    More
}) {
    return (
        <div className="main-card">
            <div className="Img-Card">
                <img src={Img} />
            </div>
            <div className="Card-Info">
                <h1>{Name}</h1>
                <small>{Desciption}</small>
                <button className="button-More"><a href={More} target="_blank">Saiba Mais</a></button>
            </div>
        </div>

    );
}
