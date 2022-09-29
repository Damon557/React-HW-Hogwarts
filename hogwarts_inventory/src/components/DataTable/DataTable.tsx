import React from 'react'; 
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { useGetData } from '../../custom-hooks'; 
import { Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material'; 
import {WandForm }from '../../components/wandForm'; 
import { useState } from 'react'; 
import { serverCalls } from '../../api'; 

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'wand Name',
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
        headerName: 'Camera Quality',
        width: 110,
        editable: true,
      },
      {
        field: 'flight_time',
        headerName: 'Flight Time',
        width: 110,
        editable: true,
      },
      {
        field: 'max_speed',
        headerName: 'Max Speed',
        width: 110,
        editable: true,
      },
      {
        field: 'dimensions',
        headerName: 'Dimensions',
        width: 110,
        editable: true,
      },
      {
        field: 'weight',
        headerName: 'Weight',
        width: 110,
        editable: true,
      },
      {
        field: 'cost_of_production',
        headerName: 'Cost of Production',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'series',
        headerName: 'Series',
        width: 110,
        editable: true,
      }
    ];
    
    interface gridData{
      data:{
        id?:string; 
      }
    }
  
export const DataTable = () => {
    let {WandData, getData } = useGetData()
    let [ open, setOpen ] = useState(false)
    let [ gridData, setData ] = useState<GridSelectionModel>([])

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
    return (
        <div style={{height: 600, width: '100%'}}>
            <h2>Wand In Our Collection</h2>
            <DataGrid 
                rows={wandData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel)}}
                {...wandData}
                />
                <Button onClick={handleOpen}>Update</Button>
                <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title'>Update Wand</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                           Wand id: {gridData[0]}
                        </DialogContentText>
                        <WandForm id={`${gridData[0]}`} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color='warning'>Cancel</Button>
                        <Button onClick={handleClose} color='primary'>Done</Button>
                    </DialogActions>
                </Dialog>
        </div>
    );