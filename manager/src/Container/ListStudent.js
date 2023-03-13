import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
function ListStudent({ student, isClass, setIsShow }) {
  console.log("vv", student);

  return (
    <>
      <div className="table_title">
        <h3>Lớp {isClass}</h3>
        <button
          className="btn1"
          color="primary"
          onClick={() => setIsShow(true)}
        >
          <MdOutlineArrowBack /> Back
        </button>
      </div>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">FullName</th>
            <th scope="col">UserName</th>
          </tr>
        </thead>
        <tbody>
          {student?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.fullName}</td>
                <td>{item.userName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListStudent;
