import React from "react";

import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function MenuLeft(props) {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/home">
            <AiFillHome />
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/studentPage">Học viên</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/schoolPage">Lớp học</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Khóa học
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Thời khóa biểu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Giáo viên
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Nhân viên
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Điểm danh theo lớp
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLeft;
