import React from "react";
import { Container, Table } from "reactstrap";
import ResultFormStudentItem from "./ResultFormStudentItem";

function ResultFormStudent(props) {
  let { listStudent, onhandleDeleteStudent, onHandleUpdateStudent } = props;
  console.log("listStudent", listStudent);
  return (
    <Container className="table-student">
      <h3>Danh sách học viên</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>DateOfBirth</th>
            <th>Gender</th>
            <th>School</th>
            <th>PhoneNumber</th>
            <th>CreateDate</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormStudentItem
            listStudent={listStudent}
            onhandleDeleteStudent={onhandleDeleteStudent}
            onHandleUpdateStudent={onHandleUpdateStudent}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormStudent;
