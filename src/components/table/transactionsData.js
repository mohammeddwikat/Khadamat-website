let transactionsColumns = [ 
    {
      field: 'id',
      headerName: 'ID', 
      width: 90 
    },
    {
      field: 'userid',
      headerName: 'User ID',
      width: 150,
      editable: true,
      sortable:true,
      
    },
    {
      field: 'pal',
      headerName: 'Current Balance',
      width: 200,
      editable: true,
    },
    {
      field: 'payed',
      headerName: 'Payed',
      width: 150,
      editable: true,
    },
  
    
  ]
  
  export default transactionsColumns 
 