// using material ui datatable for this page
import React from "react";
import "./citydatatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { cityColumns, cityRows } from "../../citydatatablesource";
import {Link} from 'react-router-dom';


const CityDatatable = () => {

    const actionColumn = [
        {field: "action", headerName: "Action", width:200, renderCell:()=>{
            return(
                <div className="cellAction">
                   <Link to="/examcity/test" style={{textDecoration : "none"}}>  
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                    
                </div>
            )
        }}
    ];
  return (
    <div className="citydatatable">
      <div className="citydatatableTitle">
        Add New Exam City
        <Link to="/examcity/new" className="link"> Add New </Link>
      </div>
      <DataGrid
      
        rows={cityRows}
        columns={cityColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9},
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default CityDatatable;
