import React from "react";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import InputFormStudent from "./InputFormStudent";

function ModalCreateNewStudent(props) {
  let { showForm, onHandleCloseForm, onHandleCreateNewStudent, listSchool } =
    props;

  let handleCloseForm = () => {
    onHandleCloseForm();
  };
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Thêm Học Viên</h3>
        </ModalHeader>

        <ModalBody>
          <InputFormStudent
            onHandleCreateNewStudent={onHandleCreateNewStudent}
            listSchool={listSchool}
          />
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={handleCloseForm}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewStudent;
