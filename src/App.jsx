import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// Simple fake auth function
const isAuthenticated = () => {
  return localStorage.getItem("token"); // اگر token موجود ہے تو true
};

// ProtectedRoute component
function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Dashboard */}
    </Routes>
  );
}

export default App;
