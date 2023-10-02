import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "222984064814-e7803mbvv20pu74vnr7con3sl1kofd38.apps.googleusercontent.com",
  apiKey: "AIzaSyDpesVOLEmp857aWlYTUAAAMOP_ZN8g9m0",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

export const apiCalendar = new ApiCalendar(config);
