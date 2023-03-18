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

function UpdateSchool(props) {
  let {
    showFormUpdate,
    onHandleCloseFormUpdate,
    onHandleUpdateSchool,
    idUpdate,
  } = props;

  let [Schoolname, setSchoolname] = useState("");
  let [TotalMembers, setTotalMembers] = useState("");
  let [Type, setType] = useState("");

  //   hàm update
  let handleUpdate = () => {
    let schoolUpdateAPI = {
      id: idUpdate,
      name: Schoolname,
      totalMembers: TotalMembers,
      type: Type,
    };

    onHandleUpdateSchool(schoolUpdateAPI);
  };

  let handleCloseForm = () => {
    onHandleCloseFormUpdate();
  };

  return (
    <div>
      <Container>
        <br />
        <Modal isOpen={showFormUpdate}>
          <ModalHeader>
            <h3>Chỉnh sửa lớp</h3>
          </ModalHeader>
          <ModalBody>
            <Container className="form-container">
              <Form>
                <FormGroup>
                  <Label for="Schoolname">Name: </Label>
                  <Input
                    id="Schoolname"
                    name="Schoolname"
                    placeholder="Input Name"
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
                    placeholder="Input TotalMembers"
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

export default UpdateSchool;
