import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
// import getNowDate from "../../UltisAuto/getNowDate";

function InputFormStudent(props) {
  let { onHandleCreateNewStudent, listSchool } = props;
  // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [Username, setUsername] = useState("");
  let [PassWord, setPassWord] = useState("");
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Gender, setGender] = useState("MALE");
  let [DateOfBirth, setDateOfBirth] = useState("");
  let [Role, setRole] = useState("");
  let [School, setSchool] = useState("");
  let [PhoneNumber, setPhoneNumber] = useState("");

  // let handleCreateStudent = (data) => {
  //   new Promise(async () => {
  //     let response = await axios({
  //       baseURL: "/api/v1/students",
  //       method: "POST",
  //       data: data,
  //     });
  //   });
  // };
  // // Hàm xử lý khi click vào nút Create
  let handleCreate = () => {
    let studentNewAPI = {
      userName: Username,
      password: PassWord,
      firstName: FirstName,
      lastName: LastName,
      gender: Gender,
      dateOfBirth: DateOfBirth,
      role: Role,
      schoolId: School,
      numberPhone: PhoneNumber,
    };
    // handleCreateStudent(studentNewAPI);
    // Truyền student cần tạo mới về StudentContainer xử lý
    console.log("kqkqk", studentNewAPI);
    onHandleCreateNewStudent(studentNewAPI);
  };
  // Dùng map
  let itemsSchool = listSchool.map((school, index) => {
    return (
      <option value={school.id} key={index}>
        {school.name}
      </option>
    );
  });

  // Hàm xử lí nút reset
  let handleReset = () => {
    setUsername("");
    setPassWord("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setDateOfBirth("");
  };
  return (
    <Container className="form-container">
      <Form>
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={Username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="PassWord">PassWord: </Label>
          <Input
            id="PassWord"
            name="PassWord"
            placeholder="Input PassWord"
            type="password"
            value={PassWord}
            onChange={(event) => {
              setPassWord(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="FirstName">FirstName: </Label>
          <Input
            id="FirstName"
            name="FirstName"
            type="text"
            value={FirstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="LastName">LastName: </Label>
          <Input
            id="LastName"
            name="LastName"
            type="text"
            value={LastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Gender">Gender: </Label>
          <Input
            id="Gender"
            name="Gender"
            type="select"
            value={Gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          >
            <option value={"MALE"}>Nam</option>
            <option value={"FEMALE"}>Nữ</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="DateOfBirth">DateOfBirth: </Label>
          <Input
            id="DateOfBirth"
            name="DateOfBirth"
            type="date"
            value={DateOfBirth}
            onChange={(event) => {
              setDateOfBirth(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Role">Chức vụ: </Label>
          <Input
            id="Role"
            name="Role"
            type="select"
            value={Role}
            onChange={(event) => {
              setRole(event.target.value);
            }}
          >
            <option value={"ADMIN"}>ADMIN</option>
            <option value={"MANAGER"}>MANAGER</option>
            <option value={"STUDENT"}>STUDENT</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="School">Select a School: </Label>
          <Input
            id="School"
            name="School"
            type="select"
            value={School}
            onChange={(event) => {
              setSchool(event.target.value);
            }}
          >
            {itemsSchool}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="PhoneNumber">PhoneNumber: </Label>
          <Input
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="Input PhoneNumber"
            type="number"
            min="0"
            value={PhoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger" onClick={handleReset}>
        Reset
      </Button>
    </Container>
  );
}

export default InputFormStudent;
