import axios from "axios";

export const baseURl = axios.create({
  baseURL: "https://casamiento-api.vercel.app/",
  //baseURL: "http://localhost:3001/",
});
