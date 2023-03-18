import { api } from "./api";

let getListSchoolAPI = () => {
  return api("GET", "schools", null);
}; // Hàm thêm mới school
let addSchoolNewAPI = (schoolNew) => {
  return api("POST", "schools", schoolNew);
};
let deleteSchoolAPI = (id) => {
  let url = "schools/" + id;
  return api("DELETE", url, null);
};

const updateSchoolAPI = (schoolUpdate) => {
  // let url = "schools/" + schoolUpdate.id;
  console.log("tt", schoolUpdate);
  let url = `schools/${schoolUpdate.id}`;
  return api("PUT", url, schoolUpdate);
};
export { getListSchoolAPI, addSchoolNewAPI, deleteSchoolAPI, updateSchoolAPI };
