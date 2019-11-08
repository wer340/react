import React from 'react'//React capital case
import './card-list.styles.css' // ./ not forgot 

export const CardList= props =>{

return <div className='card-list'>

{props.Love.map(item =>(<h3 key={item.id}>{item.name}</h3>))}
</div>;
//امدیم یک آبجکت انداختیم توی تگ کارت لیست و از اینجا بهره برداری کردیم ازش باز میشه اینو تعمیم داد به تگ های کوچکتر 
};