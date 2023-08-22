import React from 'react';
import "./Figure.css";

export default function Figure({
    title,
    description
}) {
    return (
        <div className='main-figure'>
            <div className='figure-info'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}