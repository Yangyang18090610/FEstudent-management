import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import {
  getListSchoolAPI,
  addSchoolNewAPI,
  deleteSchoolAPI,
  updateSchoolAPI,
} from "../API/SchoolAPI";
import ButtonAddSchool from "../Component/School/ButtonAddSchool";
import ModalCreateNewSchool from "../Component/School/ModalCreateNewSchool";
import ResultFormSchool from "../Component/School/ResultFormSchool";
import UpdateSchool from "../Component/School/UpdateSchool";

function SchoolContainer(props) {
  let [showFormSchool, setShowFormSchool] = useState(false);
  let [showFormUpdate, setshowFormUpdate] = useState(false);
  let [listSchool2, setListSchool2] = useState([]);
  let [Update, setUpdate] = useState({});
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
  // ấn nút EDIT school showform edit
  let onHandleEditSchool = (school) => {
    setUpdate(school);
    setshowFormUpdate(true);
  };
  // Đóng form update
  let onHandleCloseFormUpdate = () => {
    setshowFormUpdate(false);
  };
  // Hàm ấn update từ form
  let onHandleUpdateSchool = (schoolUpdate) => {
    updateSchoolAPI(schoolUpdate).then((res) => {
      fetchListSchool2();
      setshowFormUpdate(false);
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
        onHandleEditSchool={onHandleEditSchool}
      />
      <UpdateSchool
        showFormUpdate={showFormUpdate}
        onHandleCloseFormUpdate={onHandleCloseFormUpdate}
        onHandleUpdateSchool={onHandleUpdateSchool}
        Update={Update}
      />
    </Container>
  );
}

export default SchoolContainer;
