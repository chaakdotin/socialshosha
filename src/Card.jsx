import React from 'react'
import './Card.css'
export default function Card({ text, img }) {
  return (
    <div className="card">
      <div className="text">{text}</div>
      <div className="image-container">
        <img src={img} alt={text} />
      </div>
    </div>
  )
}