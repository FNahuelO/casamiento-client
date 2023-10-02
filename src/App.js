import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./components/App";
import Master from "./components/pages/Master";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="/master" exact element={<Master />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
