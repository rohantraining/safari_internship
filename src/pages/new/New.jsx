import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import  DriveFolderUploadOutlinedIcon  from "@mui/icons-material/DriveFolderUploadOutlined";
import {useState} from "react";

const New = ({inputs,title}) => {

    const [file,setFile] = useState(""); //if we upload a image that image should be seen on no image part 

    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                        src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                        alt="" 
                        />
                    </div>
                    <div className="right">
                        <form>
                            {/* htmlfor and id should be same */}
                            <div className="formInput">
                                <label htmlFor="file"> 
                                    Image:<DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>
                                {/* event e target file[0] means first file */}
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                            </div>

                            
                            {inputs.map((input) =>(
                                 <div className="formInput" key={input.id}>
                                 <label>{input.label}</label>
                                 <input type={input.type} placeholder={input.placeholder} />
                             </div>

                           ) )}
                           

                            {/* <div className="formInput">
                                <label>Name and Surname</label>
                                <input type="text" placeholder="Cristiano Ronaldo" />
                            </div>

                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="cristianoronaldo@gmail.com" />
                            </div>

                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="1111122222" />
                            </div>

                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" />
                            </div>

                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="Kanpur" />
                            </div>

                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="India" />
                            </div> */}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;

