import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CheckIn from "./pages/CheckIn.jsx";
import SetUpGoal from "./pages/SetUpGoal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SetUpGoal" element={<SetUpGoal />} />
        <Route path="/CheckIn" element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
