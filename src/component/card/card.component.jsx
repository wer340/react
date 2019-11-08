import React from 'react'
import './card.styles.css'




export const Card= props =>{
return <div className='card-container'> 
{ <img alt='flower' src={`http://lorempixel.com/400/200/fashion/${props.Monstering.id}/`}></img>}
<h1>{props.Monstering.name}</h1>
</div>;

}