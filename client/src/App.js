import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateListing from "./pages/CreateListing";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
