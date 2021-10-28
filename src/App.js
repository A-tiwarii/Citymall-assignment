import React from 'react';


import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import Table from './Table';
import Buttons from './Buttons';
import SubmitTable from './SubmitTable';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const App = () => {
  

   return (
       <div>
         
           
          <Buttons/>
           <Table/>
           <SubmitTable/>
       </div>
   );
};

export default App;