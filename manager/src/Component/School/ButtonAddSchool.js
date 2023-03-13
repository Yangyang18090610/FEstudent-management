import React from "react";
import { Container, Button } from "reactstrap";
function ButtonAddSchool(props) {
  let { onHandleButtonAddSchool } = props;
  let handleClickOpen = () => {
    onHandleButtonAddSchool();
  };
  return (
    <Container>
      <br />
      <Button color="primary" onClick={handleClickOpen}>
        + Create New School
      </Button>
    </Container>
  );
}

export default ButtonAddSchool;
