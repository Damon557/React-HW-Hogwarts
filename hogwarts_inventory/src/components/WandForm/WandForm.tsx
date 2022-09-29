import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { useGetData } from '../../custom-hooks';
import { serverCalls } from '../../api';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import { WandForm } from '../../components/WandForm';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 130 },
    {
        field: 'name',
        headerName: 'Wand',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'camera_quality',
        headerName: 'Camera',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'max_speed',
        headerName: 'Speed',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'dimensions',
        headerName: 'Dimensions',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'weight',
        headerName: 'Weight',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'flight_time',
        headerName: 'Flight Time',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'cost_of_production',
        headerName: 'Cost',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'series',
        headerName: 'Series',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
]

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


interface gridData {
    data: {
        id?: string;
    }
}

export const DataTable = () => {
    let { WandData, getData } = useGetData()
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // a list of id's from the checked rows
    return (
        <div style={{ height: 600, width: '100%' }}>
            <h2>Wands In Our Collection</h2>
            <DataGrid
                rows={WandData}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                onSelectionModelChange={(newSelectionModel) => { setData(newSelectionModel); }}
                {...WandData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Wand</DialogTitle>
                <DialogContent>
                    <DialogContentText>Wand id: {gridData[0]}</DialogContentText>
                    <WandForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="secondary">Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}