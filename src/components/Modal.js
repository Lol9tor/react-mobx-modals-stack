import React from 'react'

export default function Modal({ name, config }) {
  return <div className="modal"> 
    <h4>{name}</h4>
    <div>{config.content}</div>  
  </div>
}