import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Quiz from "./Views/Quiz";
import { Toaster } from "react-hot-toast";
import SuccessPage from "./Views/SuccessPage";
import CoursePreview from "./Views/CoursePreview";
import CongratPage from "./Views/CongratPage";
import Welcome from "./Views/Welcome";



function App() {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            width: "90%", 
            maxWidth: "600px", 
            padding: "16px",
            borderRadius: "8px",
          
          },
        }}
      />
     <BrowserRouter>
    <Routes>
    <Route index element={<Welcome />} />
    <Route path="/level_one" element={<Quiz />} />
    <Route path="/level_two" element={<CoursePreview />} />
    <Route path="/success" element={<SuccessPage />} />
    <Route path="/congrat" element={<CongratPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
