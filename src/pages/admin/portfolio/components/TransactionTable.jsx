import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Property',
    headerName: 'Property',
    width: 380,

    // editable: true,
  },
  {
    field: 'InvestmentValue',
    headerName: 'Investment Value',
    width: 380,

    // editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    type: 'number',
    width: 150,

    // editable: true,
  },
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function TransactionTable() {
  return (
    <div>
        <h1 className="text-start text-black text-[24px] font-normal mb-3 mt-2">Transactions</h1>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}

        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        // pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

    </div>
  )
}

export default TransactionTable