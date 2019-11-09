import React from 'react'
import './card.styles.css'




export const Card= props =>{
return <div className='card-container'> 
 {/* { <img alt='flower' src={`http://lorempixel.com/400/200/fashion/${props.Monstering.id}/`}></img>} */}
{ <img alt='flower' src={`https://loremflickr.com/180/180/hollywood/?lock=1${props.Monstering.id}`}></img>}
<h1>{props.Monstering.name}</h1>
<h3>{props.Monstering.email}</h3>
<h4>{props.Monstering.address.city}</h4>
</div>;

}