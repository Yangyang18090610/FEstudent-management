import React, { useState } from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";

function UpdateStudent(props) {
  let {
    showFormUpdate,
    onHandleUpdate,
    onHandleCloseFormUpdate,
    listSchool,
    stateUser,
  } = props;
  console.log("state", stateUser);
  let [PassWord, setPassWord] = useState("");
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Gender, setGender] = useState("");
  let [DateOfBirth, setDateOfBirth] = useState("");
  let [Role, setRole] = useState("");
  let [School, setSchool] = useState("");
  let [PhoneNumber, setPhoneNumber] = useState("");

  //   hàm update
  let handleUpdate = () => {
    let studentUpdateAPI = {
      id: stateUser,
      password: PassWord,
      firstName: FirstName,
      lastName: LastName,
      gender: Gender,
      dateOfBirth: DateOfBirth,
      role: Role,
      schoolId: School,
      numberPhone: PhoneNumber,
    };
    console.log("IDDDEEEE", studentUpdateAPI);
    onHandleUpdate(studentUpdateAPI);
  };

  // dùng map lọc
  let itemsSchool = listSchool?.map((school, index) => {
    return (
      <option value={school.id} key={index}>
        {school.name}
      </option>
    );
  });

  let handleCloseForm = () => {
    onHandleCloseFormUpdate();
  };

  return (
    <div>
      <Container>
        <br />
        <Modal isOpen={showFormUpdate}>
          <ModalHeader>
            <h3>Chỉnh sửa học viên</h3>
          </ModalHeader>
          <ModalBody>
            <Container className="form-container">
              <Form>
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
                    placeholder="Input FirstName"
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
                    placeholder="Input LastName"
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
              <Button color="primary" onClick={handleUpdate}>
                Update
              </Button>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button color="danger" onClick={handleCloseForm}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}

export default UpdateStudent;
