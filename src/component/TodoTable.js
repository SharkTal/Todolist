import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const columns = [
    { headerName: "Description", field: "desc", sortable: true, filter: true, editable: true, flex:1, autoHeight: true, wrapText: true },
    { headName: "Date", field: "date", sortable: true, filter: true, editable: true, flex:1},
    { headName: "Priority", field: "priority", sortable: true, filter: true, editable: true,
      cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}  
    }

]

const TodoTable = (props) => {
    return (
        <div className="ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto'}}>
            <AgGridReact
                ref = {props.gridRef}
                onGridReady={params => props.gridRef.current = params.api}
                rowSelection="single"
                columnDefs={columns}
                rowData={props.todos}
                defaultColDef={{ resizable: true }}
            >
            </AgGridReact>
          
        </div>

    )
}

export default TodoTable;