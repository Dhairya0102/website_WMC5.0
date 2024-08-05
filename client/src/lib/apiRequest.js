import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://wmc5dhairyavedwebsite1234.vercel.app/",
  withCredentials: true,
});

export default apiRequest;