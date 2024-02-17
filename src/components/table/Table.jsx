// using table component from material ui mui
import React from "react";
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
        {
            id: 1143155,
            exam_city: "Allahabad",
            img: "/images/HotelImage1.jpg",
            city_centre: "Arbour House",
            booking_from: "1 March 2024",
            room_options: 15,
            amenities: "Recycling, Refreshment Area",
            amount: 785,
            payment: "Cash On Delivery",
            status: "Approved",
        },

        {
            id: 1243155,
            exam_city: "Mumbai",
            img: "/images/HotelImage2.jpg",
            city_centre: "Elphinston House, ClubHouse",
            booking_from: "1 March 2024",
            room_options: 15,
            amenities: "Recycling",
            amount: 785,
            payment: "Online Payment",
            status: "Pending",
        },

        {
            id: 1343155,
            exam_city: "Kanpur",
            img: "/images/HotelImage3.jpg",
            city_centre: "Chapter Kings Cross",
            booking_from: "1 March 2024",
            room_options: 15,
            amenities: "Recycling, Bike Storage",
            amount: 785,
            payment: "Cash On Delivery",
            status: "Pending",
        },

        {
            id: 1443155,
            exam_city: "Lucknow",
            img: "/images/HotelImage4.jpg",
            city_centre: "Britannia South Bank ",
            booking_from: "1 March 2024",
            room_options: 15,
            amenities: "Recycling, Gym",
            amount: 785,
            payment: "Online Payment",
            status: "Approved",
        },

        {
            id: 1143155,
            exam_city: "Chennai",
            img: "/images/HotelImage5.jpg",
            city_centre: "Mother Teresa House",
            booking_from: "1 March 2024",
            room_options: 15,
            amenities: "Recycling",
            amount: 785,
            payment: "Online Payment",
            status: "Approved",
        },

    ];
    return  <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
            <TableCell className="tableCell">City ID</TableCell>
            <TableCell className="tableCell">Exam City</TableCell>
            <TableCell className="tableCell">City Centre </TableCell>
            <TableCell className="tableCell">Booking From</TableCell>
            <TableCell className="tableCell">Room Options</TableCell>
            <TableCell className="tableCell">Amenities</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">Status</TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell className="tableCell">{row.exam_city}</TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.city_centre}
                </div>
            </TableCell>
            <TableCell className="tableCell">{row.booking_from}</TableCell>
            <TableCell className="tableCell">{row.room_options}</TableCell>
            <TableCell className="tableCell">{row.amenities}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.payment}</TableCell>
            <TableCell className="tableCell">
                <span className= {`status ${row.status}`}>{row.status}</span>
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

    
};

export default List;

