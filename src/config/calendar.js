import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "222984064814-e7803mbvv20pu74vnr7con3sl1kofd38.apps.googleusercontent.com",
  apiKey: "AIzaSyDeMnNMQjy5nc9jMYT04evh28gCB_E0A_g",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const initApiCalendar = async () => {
  const apiCalendar = new ApiCalendar(config);
  await apiCalendar.handleAuthClick(); // Realiza la autorización

  return apiCalendar;
};

export default initApiCalendar;
