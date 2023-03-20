import React, { useEffect, useState } from "react";
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
    Update,
  } = props;

  const [school, setSchool] = useState({});

  useEffect(() => {
    setSchool({
      id: Update.id,
      name: Update.name,
      totalMembers: Update.totalMembers,
      type: Update.type,
    });
  }, [Update]);

  const onChange = (e) => {
    const { name = "", value = "" } = e.target;

    setSchool((school) => ({
      ...school,
      [name]: value ? value : "",
    }));
  };

  //   hàm update
  let handleUpdate = () => {
    // let schoolUpdateAPI = {
    //   id: Update.id,
    //   name: School,
    //   totalMembers: TotalMembers,
    //   type: Type,
    // };
    console.log(school);

    onHandleUpdateSchool(school);
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
                    name="name"
                    placeholder="Input Name"
                    type="text"
                    value={school.name}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="TotalMembers">TotalMembers: </Label>
                  <Input
                    id="TotalMembers"
                    name="totalMembers"
                    placeholder="Input TotalMembers"
                    type="number"
                    value={school.totalMembers}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Type">Level: </Label>
                  <Input
                    id="Type"
                    name="type"
                    type="select"
                    value={school.type}
                    onChange={onChange}
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
