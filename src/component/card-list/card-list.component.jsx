import React from 'react'//React capital case
import './card-list.styles.css' // ./ not forgot 
import {Card} from '../card/card.component'
export const CardList= props =>(

 <div className='card-list'>

{props.Love.map(item =>(

<Card key={item.id} Monstering={item}/>

))}
</div>
//امدیم یک آبجکت انداختیم توی تگ کارت لیست و از اینجا بهره برداری کردیم ازش باز میشه اینو تعمیم داد به تگ های کوچکتر 
);

// () or return {}