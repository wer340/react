import React from 'react'//React capital case
import './card-list.styles.css' // ./ not forgot 

export const CardList= props =>{

return <div className='card-list'>{props.children}</div>;

};