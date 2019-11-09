import React from 'react'
import './search-box.styles.css'


 export const SearchBox=({placeHolder,handleSearchBox}) => (


<input type='search'
className='search'
 placeholder={placeHolder} 
   onChange={handleSearchBox}
  />
);




