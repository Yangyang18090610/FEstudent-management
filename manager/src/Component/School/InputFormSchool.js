import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
function InputFormSchool(props) {
  let { onHandleCreateNewSchool } = props;
  // Khai báo State lưu giái trị các ô nhập liệu
  let [Schoolname, setSchoolname] = useState("");
  let [TotalMembers, setTotalMembers] = useState("");
  let [Type, setType] = useState("");
  // Hàm xử lí click vào Create School
  // let handleCreateClass = (data) => {
  //   console.log("hàm");
  //   new Promise(async () => {
  //     let response = await axios({
  //       baseURL: "/api/v1/schools",
  //       method: "POST",
  //       data: data,
  //     });
  //   });
  // };
  let handleCreateSchool = () => {
    let schoolNewAPI = {
      name: Schoolname,
      totalMembers: TotalMembers,
      type: Type,
    };

    // handleCreateClass(schoolNewAPI);
    onHandleCreateNewSchool(schoolNewAPI);
  };
  // Hàm xử lí Reset
  let handleResetSchool = () => {
    setSchoolname("");
    setType("");
    setTotalMembers("");
  };

  return (
    <Container className="form-container">
      <Form>
        <FormGroup>
          <Label for="Schoolname">ClassName: </Label>
          <Input
            id="Schoolname"
            name="Schoolname"
            placeholder="Input ClassName"
            type="text"
            value={Schoolname}
            onChange={(event) => {
              setSchoolname(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="TotalMembers">TotalMembers: </Label>
          <Input
            id="TotalMembers"
            name="TotalMembers"
            placeholder="input NumberMember"
            type="number"
            value={TotalMembers}
            onChange={(event) => {
              setTotalMembers(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Type">Level: </Label>
          <Input
            id="Type"
            name="Type"
            type="select"
            value={Type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value={"FRESHER"}>FRESHER</option>
            <option value={"JUNIOR"}>JUNIOR</option>
            <option value={"SENIOR"}>SENIOR</option>
          </Input>
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleCreateSchool}>
        Create
      </Button>
      <Button color="danger" onClick={handleResetSchool}>
        Reset
      </Button>
    </Container>
  );
}

export default InputFormSchool;
