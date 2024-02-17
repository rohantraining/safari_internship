import React from "react";
import "./centerlist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CenterDatatable from "../../components/datatable/CenterDatatable"

const CenterList = () => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <CenterDatatable/>
                
            </div>
        </div>
    )
}

export default CenterList;

