import { api } from "./api";

// Hàm lấy danh sách Student
let getListStudentAPI = () => {
  return api("GET", "students/", null);
};
// Hàm thêm mới Student
let addStudentNewAPI = (studentNewAPI) => {
  return api("POST", "students/", studentNewAPI);
};
// Delete Student
const deleteStudentAPI = (id) => {
  let url = "students/" + id;
  return api("DELETE", url, null);
};

// Update Student
const updateStudentAPI = (studentsUpdate) => {
  // let url = "students/" + studentsUpdate.id;
  console.log("tt", studentsUpdate);
  let url = `students/${studentsUpdate.id}`;
  return api("PUT", url, studentsUpdate);
};

export {
  getListStudentAPI,
  addStudentNewAPI,
  deleteStudentAPI,
  updateStudentAPI,
};
