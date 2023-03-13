import React from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import InputFormSchool from "./InputFormSchool";

function ModalCreateNewSchool(props) {
  let { showFormSchool, onHandleCloseFormSchool, onHandleCreateNewSchool } =
    props;
  let handleCloseFormSchool = () => {
    onHandleCloseFormSchool();
  };
  return (
    <Container>
      <br />
      <Modal isOpen={showFormSchool}>
        <ModalHeader>
          <h3>Tạo lớp mới</h3>
        </ModalHeader>

        <ModalBody>
          <InputFormSchool onHandleCreateNewSchool={onHandleCreateNewSchool} />
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={handleCloseFormSchool}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewSchool;
