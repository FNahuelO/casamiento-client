import { baseURl } from "../axios";
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

export const getInvitados = async () => {
  try {
    const { data } = await baseURl.get("get-invitados");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBebidas = async () => {
  try {
    const { data } = await baseURl.get("get-bebidas");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchYouTube = async (query) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: API_KEY,
          q: query, // Tu consulta de búsqueda
          type: "video", // Puedes ajustar esto según tus necesidades
          part: "snippet", // Esto devuelve información básica sobre los videos
          maxResults: 10, // El número máximo de resultados que deseas
        },
      }
    );

    return response.data.items; // Retorna los videos encontrados
  } catch (error) {
    console.error("Error en la búsqueda de YouTube:", error);
    throw error;
  }
};

export const postInvitacion = async (datos) => {
  try {
    const { data } = await baseURl.put("confirm-invitation", datos);
    return data;
  } catch (error) {
    console.log(error);
  }
};
