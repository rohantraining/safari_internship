import React from "react";
import "./citylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CityDatatable from "../../components/datatable/CityDatatable";


const CityList = () => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <CityDatatable/>
                
            </div>
        </div>
    )
}

export default CityList

