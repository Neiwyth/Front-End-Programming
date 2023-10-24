/* eslint-disable react/prop-types */
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Fragment, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { Button } from "@mui/material";
// import { DeleteIcon } from "@mui/icons-material/delete"



function TodoGrid(props) {

    const gridRef = useRef();

    const columns = [
        { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true },
        {
            headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'black' }
        },

        // {
        //     headerName: '', cellRenderer: () => (
        //         <IconButton aria-label="delete" color="error" onClick={deleteTodo}><DeleteIcon /></IconButton >
        //     )
        // }
    ];

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length === 0) {
            alert('Choose a row first!');
        } else {
            const deleteRow = parseInt(gridRef.current.getSelectedNodes()[0].id)
            props.onDelete(deleteRow)
        }
    }


    return (

        <Fragment>
            <div className='list-container'>
                <Button
                    variant='contained'
                    size='small'
                    color='error'
                    onClick={deleteTodo}>
                    Delete
                </Button>
                <div className="ag-theme-material"
                    style={{
                        height: '500px',
                        width: '31%',
                        margin: 'auto',
                    }}>
                    <AgGridReact
                        columnDefs={columns}
                        rowData={props.todos}
                        ref={gridRef}
                        rowSelection='single'
                        animateRows='true'
                        onGridReady={params => gridRef.current = params.api}>
                    </AgGridReact>
                </div>
            </div>
        </Fragment >
    )
}


export default TodoGrid