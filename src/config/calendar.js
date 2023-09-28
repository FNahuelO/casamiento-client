import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "713758357000-3m33b353hcc67bhi413ili7r7a0h8lh2.apps.googleusercontent.com",
  apiKey: "AIzaSyBOTDRH4UBts12zl5WD64rzYXSWHTtjHOI",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

export const apiCalendar = new ApiCalendar(config);
