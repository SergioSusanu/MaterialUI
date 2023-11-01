import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const DataTable = ({rows, columns,loading}) => {

  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} loading={loading}
       pageSizeOptions={[4,5]}
       
      />
    </div>
  );
}

export default DataTable