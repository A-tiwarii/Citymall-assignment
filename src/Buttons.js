import React from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgInputTextField } from 'ag-grid-community';

const Buttons = () => {
   

   return (
       <div style={{marginTop:50,marginLeft:50}}>
        
    <button style={{margin:10,padding:10}} >Add Row</button> 
       
    <button style={{margin:10,padding:10}}>Delete Selected Row</button> 
    <button style={{margin:10,padding:10}}>Delete Non Selected Row</button> 
    <button style={{margin:10,padding:10}}>Submit</button> 
     
     

    
           
       </div>
       
   );
};

export default Buttons;