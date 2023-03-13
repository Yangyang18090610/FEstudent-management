import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import {
  getListSchoolAPI,
  addSchoolNewAPI,
  deleteSchoolAPI,
} from "../API/SchoolAPI";
import ButtonAddSchool from "../Component/School/ButtonAddSchool";
import ModalCreateNewSchool from "../Component/School/ModalCreateNewSchool";
import ResultFormSchool from "../Component/School/ResultFormSchool";

function SchoolContainer(props) {
  let [showFormSchool, setShowFormSchool] = useState(false);
  let [listSchool2, setListSchool2] = useState([]);
  // Hiện Form
  let onHandleButtonAddSchool = () => {
    setShowFormSchool(true);
  };
  // Đóng Form
  let onHandleCloseFormSchool = () => {
    setShowFormSchool(false);
  };

  // Hàm ấn nút Create School
  let onHandleCreateNewSchool = (schoolNew) => {
    console.log("ff", schoolNew);
    let abc = new Promise(async (resolve, reject) => {
      let response = await axios({
        baseURL: "/api/v1/schools",
        method: "POST",
        data: schoolNew,
      });
      resolve(response);
    });
    abc.then((res) => {
      console.log("ok then");
      fetchListSchool2();
    });
    // new Promise(async () => {
    //   let response = await axios({
    //     baseURL: "/api/v1/schools",
    //     method: "POST",
    //     data: schoolNew,
    //   });
    // });

    setShowFormSchool(false);
  };
  // Hàm xóa School
  let onHandleDeleteSchool = (id) => {
    deleteSchoolAPI(id).then((res) => {
      fetchListSchool2();
    });
  };
  // Hàm set list khi thêm mới
  let fetchListSchool2 = () => {
    getListSchoolAPI().then((listSchoolAPI2) => {
      setListSchool2(listSchoolAPI2.content);
    });
  };
  useEffect(() => {
    fetchListSchool2();
  }, []);

  return (
    <Container>
      <ButtonAddSchool onHandleButtonAddSchool={onHandleButtonAddSchool} />
      <ModalCreateNewSchool
        onHandleCreateNewSchool={onHandleCreateNewSchool}
        showFormSchool={showFormSchool}
        onHandleCloseFormSchool={onHandleCloseFormSchool}
      />
      <ResultFormSchool
        listSchool2={listSchool2}
        onHandleDeleteSchool={onHandleDeleteSchool}
      />
    </Container>
  );
}

export default SchoolContainer;
