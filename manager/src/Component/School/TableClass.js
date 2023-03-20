import React from "react";
import { Button, Container, Table } from "reactstrap";

function TableClass({
  listSchool2,
  setIsShow,
  setIsClass,
  onHandleDeleteSchool,
  onHandleEditSchool,
}) {
  return (
    <div>
      <Container className="table-student">
        <h3>Danh sách lớp học</h3>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>ClassName</th>
              <th>TotalMembers</th>
              <th>CreatAt</th>
              <th>UpdateAt</th>
              <th>Level</th>
              <th>ListStudents</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listSchool2.map((school, index) => {
              let handleDeleteSchool = (id) => {
                onHandleDeleteSchool(id);
              };
              let handleEditSchool = (school) => {
                onHandleEditSchool(school);
              };
              return (
                <tr key={index}>
                  <td>{school.id}</td>
                  <td>{school.name}</td>
                  <td>{school.totalMembers}</td>
                  <td>{school.createdAt}</td>
                  <td>{school.updateAt}</td>
                  <td>{school.type}</td>
                  <td>
                    <Button
                      onClick={() => {
                        return setIsShow(false), setIsClass(school.name);
                      }}
                    >
                      List Student
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      onClick={() => handleEditSchool(school)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      onClick={() => handleDeleteSchool(school.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableClass;
