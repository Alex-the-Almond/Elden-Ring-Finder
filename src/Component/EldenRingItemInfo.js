import React, { useState } from 'react'


const EldenRingItemInfo = (props) => {
    const { value, image, name, description, effect } = props
    
    
    
return(
        <div>
           <h2>{props.data.name}</h2> 
           <img src={props.data.image} alt='item of choice'/>
           <p>{props.data.description}</p>
           <p>{props.data.effect}</p>
        </div>
    )
}
export default EldenRingItemInfo;