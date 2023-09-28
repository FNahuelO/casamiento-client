import axios from "axios";

export const baseURl = axios.create({
  baseURL: "https://api-casamiento.onrender.com/",
  //baseURL: "http://localhost:3001/",
});
