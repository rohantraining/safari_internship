export const cityColumns = [
    { field: "id", headerName: "ID", width: 70},
    {field:"city", headerName:"City", width: 230, renderCell: (params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.cityname}
            </div>
        )
    }},

    {
        field: "service",
        headerName: "Service",
        width: 400,
        renderCell: (params) => {
            return (
                <select value={params.row.service} className="serviceSelect" readOnly>
                    <option value="Service A">Travel Service</option>
                    <option value="Service B">Accomodation Service</option>
                    <option value="Service C">Travel + Accomodation Service</option>
                </select>
            )
        }
    },
    // {
    //     field:"email", headerName:"Email", width:230,
    // },

    // {
    //     field:"age", headerName:"Age", width:200,
    // },

    {
        field:"status", headerName:"Status", width:200,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

]

//temporary  data
export const cityRows = [
    {
        id: 1,
        cityname: "Allahabad",
        img: "/images/allahabad1.jpeg",
        status: "active",
    },

    {
        id: 2,
        cityname: "Kanpur",
        img: "/images/k.jpg",
        status: "pending",
    },

    {
        id: 3,
        cityname: "Lucknow",
        img: "/images/lucknow1.jpeg",
        status: "passive",
    },

]

