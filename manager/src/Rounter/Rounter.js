import { Route, Routes } from "react-router-dom";
import ListStudent from "../Container/ListStudent.js";
import Home from "../Page/Home.js";

import SchoolPage from "../Page/SchoolPage";
import StudentPage from "../Page/StudentPage";

let routes = (
  <Routes>
    <Route path="/studentPage" element={<StudentPage />} />
    {/* <Route path="/studentPage" element={<StudentPage />}></Route> */}
    <Route path="/listStudent" element={<ListStudent />} />
    <Route path="/schoolPage" element={<SchoolPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Home />} />
  </Routes>
);
export default routes;
