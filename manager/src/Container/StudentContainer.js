import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getListSchoolAPI } from "../API/SchoolAPI";
import {
  addStudentNewAPI,
  deleteStudentAPI,
  getListStudentAPI,
  updateStudentAPI,
} from "../API/StudentAPI";
import ButtonAddStudent from "../Component/Student/ButtonAddStudent";
import ModalCreateNewStudent from "../Component/Student/ModalCreateNewStudent";
import ResultFormStudent from "../Component/Student/ResultFormStudent";
import UpdateStudent from "../Component/Student/UpdateStudent";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function StudentContainer(props) {
  let [showForm, setShowForm] = useState(false);
  let [showFormUpdate, setShowFormUpdate] = useState(false);
  let [listSchool, setListSchool] = useState([]);
  let [update, setUpdate] = useState({});
  console.log("listSchooool", listSchool);
  // Khai báo State để quản lý danh sách student trên hệ thống
  let [listStudent, setListStudent] = useState([]);
  // Hiện Form tạo student
  let onHandleButtonAddStudent = () => {
    setShowForm(true);
  };
  // Đóng form tạo student
  let onHandleCloseForm = () => {
    setShowForm(false);
  };

  // Hàm Callback xử lý khi nhấn nút Create ở InputForm
  // Thêm student
  let onHandleCreateNewStudent = (studentNewAPI) => {
    // addStudentNewAPI(studentNewAPI).then((res) => {
    //   fetchListStudent();;
    // });
    // Tạo mới StudentAPI
    let xyz = new Promise(async (resolve, reject) => {
      let response = await axios({
        baseURL: "/api/v1/students/",
        method: "POST",
        data: studentNewAPI,
      });
      resolve(response);
    });
    xyz.then((res) => {
      fetchListStudent();
    });
    setShowForm(false);
  };
  // Hàm xóa student khi ấn nút DELETE
  let onhandleDeleteStudent = (id) => {
    deleteStudentAPI(id).then((res) => {
      fetchListStudent();
    });
  };
  // Hàm set lại list khi thêm mới
  let fetchListStudent = () => {
    getListStudentAPI().then((listStudentAPI) => {
      setListStudent(listStudentAPI.content);
      console.log(listStudentAPI.content);
    });
  };
  let fetchListSchool = () => {
    getListSchoolAPI().then((listSchoolAPI) => {
      setListSchool(listSchoolAPI.content);
    });
  };
  // Hàm Mở/Đóng Form Update khi ấn Edit
  let onHandleUpdateStudent = (student) => {
    console.log("USER", student);
    setUpdate(student);
    setShowFormUpdate(true);
  };
  let onHandleCloseFormUpdate = () => {
    setShowFormUpdate(false);
  };
  // Hàm ấn update(edit) học viên từ Form
  let onHandleUpdate = (studentsUpdate) => {
    updateStudentAPI(studentsUpdate).then((res) => {
      fetchListStudent();
      setShowFormUpdate(false);
    });
  };
  // kHAI BÁO useEffect khi reload trang
  useEffect(() => {
    fetchListStudent();
    fetchListSchool();
  }, []);

  return (
    <Container>
      <ButtonAddStudent onHandleButtonAddStudent={onHandleButtonAddStudent} />
      <ModalCreateNewStudent
        showForm={showForm}
        onHandleCloseForm={onHandleCloseForm}
        onHandleCreateNewStudent={onHandleCreateNewStudent}
        listSchool={listSchool}
      />
      <ResultFormStudent
        listStudent={listStudent}
        onhandleDeleteStudent={onhandleDeleteStudent}
        onHandleUpdateStudent={onHandleUpdateStudent}
      />
      <UpdateStudent
        update={update}
        showFormUpdate={showFormUpdate}
        listSchool={listSchool}
        onHandleCloseFormUpdate={onHandleCloseFormUpdate}
        onHandleUpdate={onHandleUpdate}
        listStudent={listStudent}
      />
    </Container>
  );
}

export default StudentContainer;
