import { DataGrid, GridToolbar  } from "@material-ui/data-grid";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import userColumns from './userData'
import projectsColumns from './projectsData'
import useStyle from "./tableStyle";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import reportColumns from './reportData'
import skillsColumns from './skillsData'
import transactionsColumns from './transactionsData'
import PaymentIcon from '@material-ui/icons/Payment';

const TableData = (props) => {

  const classes = useStyle()
  const getDataUrl = props.getDataUrl
  const postDataUrl = props.postDataUrl
  const doneDataUrl = props.doneDataUrl
  const deleteDataUrl = props.deleteDataUrl
  const addNewRowUrl = props.addNewRowUrl
  const makePayment = props.makePayment
  const [rows, setRows] = useState([])
  const type = props.tableCategory
  const deleteRow = {
    field:"button 2",
    headerName:"Delete",
    width:120,
    editable:false,

    renderCell: (cellValues) => {
      return (
        <IconButton 
          onClick={(event) => {
            setRows(rows.filter(row => cellValues.id != row.id))
            axios.post(
              deleteDataUrl,
              {
                id:cellValues.id
              }
            ).then(res => alert("gg"), err => alert(err))
          }}
          className={classes.deleteButton}
        >
          <HighlightOffIcon/>
        </IconButton>
      );
    }
  }
  const doneRow = {
    field:"button",
    headerName:"Done",
    width:120,
    editable:false,
    renderCell: (cellValues) => {
      return (
        <IconButton 
          onClick={(event) => {
            setRows(rows.filter(row => cellValues.id != row.id))
            axios.post(
              doneDataUrl,
              cellValues.id
            ).then(res => alert("gg"), err => alert(err))
          }}
          className={classes.checkButton}
        >
          <CheckCircleIcon/>
        </IconButton>
      );
    }
  }
  const payment = {
    field:"button-3",
    headerName:"Payment",
    width:150,
    editable:false,
    renderCell: (cellValues) => {
      return (
        <IconButton 
          onClick={(event) => {
            setRows(rows.filter(row => cellValues.id != row.id))
            
            axios.post(
              makePayment,
              {
                id: cellValues.row.userid
              }
            ).then(res => console.log(res), err => alert(err))
          }}
          className={classes.paymentButton}
        >
          <PaymentIcon />
        </IconButton>
      );
    }
  }
  
  useEffect(() => {
    axios.get(
      getDataUrl,
    ).then(
      (res) => {
        
        setRows(res.data)
      }
    )
  }, [])

  let cols = [];
  switch(type){
    case 'users':
      cols = userColumns
      cols = [...cols, deleteRow]
      break
    case 'projects':
      cols = projectsColumns
      cols = [...cols, doneRow, deleteRow]
      break
    case 'skills':
      cols = skillsColumns
      cols = [...cols, deleteRow]
      break
    case 'transactions':
      cols = transactionsColumns 
      cols = [...cols, payment]
      break
    case 'reports':
      cols = reportColumns
      cols = [...cols, doneRow, deleteRow]
      break
  }
  const columns = [
    ...cols,
  ];
  const updateData = (data) => {
    const test = (rows.filter(row => row.id == data.id))
    test[0][data.field] = data.value
    console.log(test[0])
    axios.post(
      postDataUrl,
      test[0]
    ).then(res => alert('done'), err => alert(err))
  }

  return (
    <div style={{ height: 420, width: "100%" }}>
      <h2 style={{color:"darkred"}}>{props.title}</h2>
      <DataGrid
        pageSize={5}
        onCellEditCommit={updateData}
        rows={rows}
        columns={columns}
      
          components={{
            Toolbar: GridToolbar,
          }}
        sortModel={[
          {
            field: "id",
            sort: "asc",
          },
        ]}
      />
    </div>
  );
};
export default TableData;
