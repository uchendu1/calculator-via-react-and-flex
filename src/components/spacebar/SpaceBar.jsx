
 
 import React from 'react';
 import './SpaceBar.css'
 
 export const SpaceBar = (props) => (
     <div className='space-btn' onClick={props.handleSpaceBar}>
         {props.children}
     </div> 
 )
      
 