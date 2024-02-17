import React, { useContext, useState } from "react";
import "./pages/home/home.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Loginn from "./pages/loginn/Loginn";
import List from "./pages/list/List";
import CityList from "./pages/list/CityList";
import CenterList from "./pages/list/CenterList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, serviceInputs, examcityInputs, examcitycenterInputs } from "./formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    //if its dark mode then class name will be appp dark otherwise it will be app
    <div className={darkMode? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Loginn />} />

          <Route path="users">
            <Route index element={<List />} /> 
            <Route path=":userId" element={<Single />} /> 
            <Route path="new" element={<New inputs={userInputs}  title="Add New User"/>} /> 
          </Route>

          <Route path="services">
            <Route index element={<List />} /> 
            <Route path=":serviceId" element={<Single />} /> 
            <Route path="new" element={<New inputs={serviceInputs} title="Add New Service" />} /> 
          </Route>

          <Route path="examcity">
            <Route index element={<CityList />} /> 
            <Route path=":examcityId" element={<Single />} /> 
            <Route path="new" element={<New inputs={examcityInputs} title="Add New Exam City" />} /> 
            
          </Route>

          <Route path="examcitycenter">
            <Route index element={<CenterList />} /> 
            <Route path=":examcitycenterId" element={<Single />} /> 
            <Route path="new" element={<New inputs={examcitycenterInputs} title="Add New Exam City Center" />} /> 
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
