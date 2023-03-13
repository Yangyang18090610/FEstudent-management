import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ListStudent from "../../Container/ListStudent";
import TableClass from "./TableClass";
const ResultFormSchoolItem = (props) => {
  let { listSchool2, onHandleDeleteSchool } = props;
  let [isShow, setIsShow] = useState(true);
  let [isClass, setIsClass] = useState("");
  let [student, setListStudents] = useState([]);

  useEffect(() => {
    functionClass();
  }, [isClass]);

  console.log({ student });
  const functionClass = () => {
    listSchool2.map((item, index) => {
      if (item.name == isClass) {
        setListStudents(item.students);
      }
    });
  };

  console.log("hhh", isClass);
  console.log("nnn", listSchool2);
  return (
    // Dùng toán tử 3 ngôi để hiển thị thay đổi theo giá trị true/false
    <div>
      {isShow ? (
        <TableClass
          listSchool2={listSchool2}
          setIsShow={setIsShow}
          setIsClass={setIsClass}
          onHandleDeleteSchool={onHandleDeleteSchool}
        />
      ) : (
        <ListStudent
          setIsShow={setIsShow}
          isClass={isClass}
          student={student}
        />
      )}
    </div>
  );
};

export default ResultFormSchoolItem;
