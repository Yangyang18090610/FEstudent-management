import React, { useState, useEffect } from "react";
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
    update,
  } = props;

  // let [PassWord, setPassWord] = useState("");
  // let [FirstName, setFirstName] = useState("");
  // let [LastName, setLastName] = useState("");
  // let [Gender, setGender] = useState("");
  // let [DateOfBirth, setDateOfBirth] = useState("");
  // let [Role, setRole] = useState("");
  // let [School, setSchool] = useState("");
  // let [PhoneNumber, setPhoneNumber] = useState("");

  const [student, setStudent] = useState({});

  useEffect(() => {
    setStudent({
      id: update.id,
      password: update.password,
      firstName: update.firstName,
      lastName: update.lastName,
      gender: update.gender,
      dateOfBirth: update.dateOfBirth,
      role: update.role,
      schoolName: update.schoolName,
      numberPhone: update.numberPhone,
    });
  }, [update]);

  const onChange = (e) => {
    const { name = "", value = "" } = e.target;

    setStudent((student) => ({
      ...student,
      [name]: value ? value : "",
    }));
  };
  //   hàm update
  let handleUpdate = () => {
    // let studentUpdateAPI = {
    // id: stateUser,
    // password: PassWord,
    // firstName: FirstName,
    // lastName: LastName,
    // gender: Gender,
    // dateOfBirth: DateOfBirth,
    // role: Role,
    // schoolId: School,
    // numberPhone: PhoneNumber,
    // };
    // console.log("IDDDEEEE", studentUpdateAPI);
    console.log("ggggg", student);
    onHandleUpdate(student);
  };

  // dùng map lọc
  let itemsSchool = listSchool?.map((school, index) => {
    // setStudent({
    //   school: school.name === update.schoolName ? school : {}
    // })
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
                    name="password"
                    placeholder="Input PassWord"
                    type="text"
                    value={student.password}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="FirstName">FirstName: </Label>
                  <Input
                    id="FirstName"
                    name="firstName"
                    placeholder="Input FirstName"
                    type="text"
                    value={student.firstName}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">LastName: </Label>
                  <Input
                    id="LastName"
                    name="lastName"
                    placeholder="Input LastName"
                    type="text"
                    value={student.lastName}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Gender">Gender: </Label>
                  <Input
                    id="Gender"
                    name="gender"
                    type="select"
                    value={student.gender}
                    onChange={onChange}
                  >
                    <option value={"MALE"}>Nam</option>
                    <option value={"FEMALE"}>Nữ</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="DateOfBirth">DateOfBirth: </Label>
                  <Input
                    id="DateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={student.dateOfBirth}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Role">Chức vụ: </Label>
                  <Input
                    id="Role"
                    name="role"
                    type="select"
                    value={student.role}
                    onChange={onChange}
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
                    name="schoolName"
                    type="select"
                    value={student.schoolName}
                    onChange={onChange}
                  >
                    {itemsSchool}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="PhoneNumber">PhoneNumber: </Label>
                  <Input
                    id="NumberPhone"
                    name="numberPhone"
                    placeholder="Input PhoneNumber"
                    type="number"
                    min="0"
                    value={student.numberPhone}
                    onChange={onChange}
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
