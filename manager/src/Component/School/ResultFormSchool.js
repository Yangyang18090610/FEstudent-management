import React from "react";
import { Container, Table } from "reactstrap";
import ResultFormSchoolItem from "./ResultFormSchoolItem";

function ResultFormSchool(props) {
  let { listSchool2, onHandleDeleteSchool } = props;
  console.log("abc", listSchool2);

  return (
    <ResultFormSchoolItem
      listSchool2={listSchool2}
      onHandleDeleteSchool={onHandleDeleteSchool}
    />
  );
}

export default ResultFormSchool;
