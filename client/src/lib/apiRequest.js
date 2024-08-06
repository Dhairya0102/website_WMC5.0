import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://website-wmc5-0.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;