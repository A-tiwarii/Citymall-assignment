import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgInputTextField } from 'ag-grid-community';





const Table = () => {
   const rowData = [{"Id":1,"Name":"Aman","Email":"amnntiwari@gmail.com","Gender":"Male","DOB":"20-06-1999","Country":"India","City":"Bilaspur"},
   {"Id":2,"Name":"Aman2","Email":"amnntiwari@gmail.com","Gender":"Male","DOB":"20-06-1999","Country":"India","City":"Bilaspur"},
   {"Id":3,"Name":"Aman3","Email":"amnntiwari@gmail.com","Gender":"Male","DOB":"20-06-1999","Country":"India","City":"Bilaspur"}
       
   ];
   const columns=[
       {
           headerName:"Id",field:'Id',checkboxSelection:true
       }
       ,{
        headerName:"Name",field:'Name'
    },{
        headerName:"Email",field:'Email'
    },{
        headerName:"Gender",field:'Gender',
        width:140,
        editable:true,cellRenderer:'GenderComponent'

    },{
        headerName:"DOB",field:'DOB',
        type: ['dateColumn', 'nonEditableColumn']
    },{
        headerName:"Country",field:'Country'
    },{
        headerName:"City",field:'City',
    }
   ]

   const defoultColumn ={
       sortable:true,filter: 'agNumberColumnFilter' ,editable:true,ispinning:true,isPinningRight:true
   }

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1200,margin:50,marginTop:30}}>
        
   
     
     <AgGridReact  rowData={rowData} columnDefs={columns} defaultColDef={defoultColumn} >

     </AgGridReact>
           
       </div>
       
   );
};

export default Table;