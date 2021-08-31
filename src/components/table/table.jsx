import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import userColumns from "./userData";
import projectsColumns from "./projectsData";
import useStyle from "./tableStyle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import reportColumns from "./reportData";
import skillsColumns from "./skillsData";
import transactionsColumns from "./transactionsData";
import PaymentIcon from "@material-ui/icons/Payment";
import LinkIcon from "@material-ui/icons/Link";
const TableData = (props) => {
  const classes = useStyle();
  const getDataUrl = props.getDataUrl;
  const postDataUrl = props.postDataUrl;
  const doneDataUrl = props.doneDataUrl;
  const deleteDataUrl = props.deleteDataUrl;
  const addNewRowUrl = props.addNewRowUrl;
  const makePayment = props.makePayment;
  const redirectToProject = props.redirectToProject;
  const [rows, setRows] = useState([]);
  const type = props.tableCategory;

  const toProfile = {
    field: "button 3",
    headerName: "View Profile",
    width: 150,
    editable: false,
    align: "center",

    renderCell: (cellValues) => {
      return (
        <IconButton
          onClick={(event) => {
            const win = window.open(
              cellValues.row.profiletype == "P"
                ? "/productOwner/" + cellValues.row.id
                : cellValues.row.profiletype == "F"
                ? "/profile/" + cellValues.row.id
                : redirectToProject != null
                ? redirectToProject + cellValues.row.id
                : "/",
              "_blank"
            );
            console.log(cellValues.row);

            // win.focus();
          }}
          className={classes.redirectButton}
        >
          <LinkIcon />
        </IconButton>
      );
    },
  };
  const deleteRow = {
    field: "button 2",
    headerName: "Delete",
    width: 120,
    editable: false,
    align: "center",

    renderCell: (cellValues) => {
      return (
        <IconButton
          onClick={(event) => {
            setRows(rows.filter((row) => cellValues.id != row.id));
            axios
              .post(deleteDataUrl, {
                id: cellValues.id,
              })
              .then(
                (res) => console.log(res),
                (err) => console.log(err)
              );
          }}
          className={classes.deleteButton}
        >
          <HighlightOffIcon />
        </IconButton>
      );
    },
  };
  const doneRow = {
    field: "button",
    headerName: "Done",
    width: 120,
    align: "center",
    editable: false,
    renderCell: (cellValues) => {
      return (
        <IconButton
          onClick={(event) => {
            setRows(rows.filter((row) => cellValues.id != row.id));
            axios
              .post(doneDataUrl, {
                id: cellValues.id,
              })
              .then(
                (res) => console.log(res),
                (err) => console.log(err)
              );
          }}
          className={classes.checkButton}
        >
          <CheckCircleIcon />
        </IconButton>
      );
    },
  };
  const payment = {
    field: "button-3",
    headerName: "Payment",
    width: 150,
    align: "center",
    editable: false,
    renderCell: (cellValues) => {
      return (
        <IconButton
          onClick={(event) => {
            setRows(rows.filter((row) => cellValues.id != row.id));

            axios
              .post(makePayment, {
                id: cellValues.row.userid,
              })
              .then(
                (res) => console.log(res),
                (err) => console.log(err)
              );
          }}
          className={classes.paymentButton}
        >
          <PaymentIcon />
        </IconButton>
      );
    },
  };

  useEffect(() => {
    axios.get(getDataUrl).then((res) => {
      if (type == "projects") {
        setRows(
          res.data.filter((row) => {
            if (row.ownerid != null) {
              switch (row.type) {
                case 0:
                  row.type = "open";
                  break;
                case 1:
                  row.type = "current work";
                  break;
                case 2:
                  row.type = "completed";
                  break;
                case 3:
                  row.type = "under review";
                  break;
                case 4:
                  row.type = "canceled";
                  break;
                case 5:
                  row.type = "closed";
                  break;
                case 6:
                  row.type = "rejected";
                  break;
                case 7:
                  row.type = "draft";
                  break;
              }
              return row;
            }
          })
        );
      } else {
        setRows(res.data);
      }
    });
  }, []);

  let cols = [];
  switch (type) {
    case "users":
      cols = userColumns;
      cols = [...cols, toProfile, deleteRow];
      break;
    case "projects":
      cols = projectsColumns;
      cols = [...cols, toProfile, doneRow, deleteRow];
      break;
    case "skills":
      cols = skillsColumns;
      cols = [...cols, deleteRow];
      break;
    case "transactions":
      cols = transactionsColumns;
      cols = [...cols, payment];
      break;
    case "reports":
      cols = reportColumns;
      cols = [...cols, doneRow, deleteRow];
      break;
  }
  const columns = [...cols];
  const updateData = (data) => {
    const test = rows.filter((row) => row.id == data.id);
    test[0][data.field] = data.value;
    console.log(test[0]);
    axios.post(postDataUrl, test[0]).then(
      (res) => alert("done"),
      (err) => console.log(err)
    );
  };

  return (
    <div style={{ height: 420, width: "100%" }}>
      <h2 style={{ color: "darkred" }}>{props.title}</h2>
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
