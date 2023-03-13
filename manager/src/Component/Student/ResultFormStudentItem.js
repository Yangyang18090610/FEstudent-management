import React from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function ResultFormStudentItem(props) {
  let { listStudent, onhandleDeleteStudent, onHandleUpdateStudent } = props;

  // Dùng map lặp qua từng student từ từng 1 phần tử sẽ tạo ra 1 phần tử mới (mảng mới )) để render các thành phần trong 1 List dữ liệu
  let item = listStudent.map((student, index) => {
    // const handleDeleteStudent = async (id) => {
    //   await deleteStudentAPI(id);
    // };
    //
    // Hàm Update
    let handleEdit = (id) => {
      onHandleUpdateStudent(id);
      console.log("EDITU", id);
    };
    // Hàm xóa
    let handleDeleteStudent = (id) => {
      onhandleDeleteStudent(id);
    };
    return (
      <tr key={index}>
        <td>{student.id}</td>
        <td>{student.userName}</td>
        <td>{student.fullName}</td>
        <td>{student.dateOfBirth}</td>
        <td>{student.gender}</td>
        <td>{student.schoolName}</td>
        <td>{student.numberPhone}</td>
        <td>{student.createdDate}</td>
        <td>
          <Button
            color="warning"
            onClick={() =>
              // let user = {
              //   id: student.id,
              //   password: student.password,
              //   firstName: student.firstName,
              //   lastName: student.lastName,
              //   gender: student.gender,
              //   dateOfBirth: student.dateOfBirth,
              //   role: student.role,
              //   schoolName: student.schoolName,
              //   numberPhone: student.numberPhone,
              // };
              handleEdit(student.id)
            }
          >
            Edit
          </Button>
        </td>
        <td>
          <Button
            color="warning"
            onClick={() => handleDeleteStudent(student.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });
  return item;
}

export default ResultFormStudentItem;
