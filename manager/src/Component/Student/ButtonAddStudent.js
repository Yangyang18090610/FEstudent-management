import React from "react";
import { Container, Button } from "reactstrap";

function ButtonAddStudent(props) {
  let { onHandleButtonAddStudent } = props;
  let handleClick = () => {
    onHandleButtonAddStudent();
  };
  return (
    <Container>
      <br />
      <Button color="primary" onClick={handleClick}>
        + Create New Student
      </Button>
    </Container>
  );
}

export default ButtonAddStudent;
