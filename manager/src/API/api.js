import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((response) => {
      console.log("api");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
