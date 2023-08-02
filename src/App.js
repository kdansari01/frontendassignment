import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import JobsPage from "./pages/JobsPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "./pages/FormPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs/:category" element={<JobsPage />} />
          <Route
            exact
            path="/jobs/:title/:id"
            element={<ApplicationFormPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
