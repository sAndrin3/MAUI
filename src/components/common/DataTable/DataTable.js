import React, {useState} from 'react';
import {DataGrid} from "@mui/x-data-grid";

const DataTable = ({
    rows,
    columns,
    loading,
    sx
}) => {

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 2,
        page: 0
    });

    return (
       <DataGrid
           rows={rows}
           columns={columns}
           loading={loading}
           sx={sx}
           checkboxSelection
           pagination
           pageSizeOptions={[2, 5, 10]}
           paginationModel={paginationModel}
           onPaginationModelChange={setPaginationModel}
       />
    )
}

export default DataTable;