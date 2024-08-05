import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://wmc5dhairyavedwebsite1234.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;