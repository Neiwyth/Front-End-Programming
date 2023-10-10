/* eslint-disable react/prop-types */
import { AgGridReact } from "ag-grid-react"
import { Fragment, useRef } from "react"

function TodoGrid(props) {

    const gridRef = useRef();

    const columns = [
        { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true },
        {
            headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ]

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length === 0) {
            alert('Choose a row first!')
        } else {
            const deleteRow = parseInt(gridRef.current.getSelectedNodes()[0].id)
            props.onDelete(deleteRow)
        }
    }


    return (

        <Fragment>
            <button onClick={deleteTodo}>Delete</button>
            <div className="ag-theme-material"
                style={{
                    height: '500px',
                    width: '50%',
                    margin: 'auto'
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
        </Fragment>
    )
}

export default TodoGrid