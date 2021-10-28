import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgInputTextField } from 'ag-grid-community';

const SubmitTable = () => {
   const rowData = [{Id:'Id',Name:'Name',Email:'Email',Gender:'Gender',DOB:'DOB',Country:'Country',City:'City'}
       
   ];
   const columns=[
       {
           headerName:"Id",field:'id'
       }
       ,{
        headerName:"Name",field:'name'
    },{
        headerName:"Email",field:'email'
    },{
        headerName:"Gender",field:'gender'
    },{
        headerName:"DOB",field:'dob'
    },{
        headerName:"Country",field:'country'
    },{
        headerName:"City",field:'city',
    }
   ]

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1200,margin:50}}>
        
   
     
     <AgGridReact  rowData={rowData} columnDefs={columns}>

     </AgGridReact>
           
       </div>
       
   );
};

export default SubmitTable;