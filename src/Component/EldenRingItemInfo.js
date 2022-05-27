import React, { useState } from 'react'
import '../App.css';

const EldenRingItemInfo = (props) => {
    const { value, image, name, description, effect } = props
    
    
    
return(
        <div className='item'>
           <h2 className='title'>{props.data.name}</h2> 
           <img src={props.data.image} alt='item of choice' className='picture'/>
           <p>{props.data.description}</p>
           <p>{props.data.effect}</p>
        </div>
    )
}
export default EldenRingItemInfo;