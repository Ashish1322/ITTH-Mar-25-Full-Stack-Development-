import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import GroupChat from "./components/chat/GroupChat";
import AuthProvider from "./context/providers/AuthProvider";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import GroupProvider from "./context/providers/GroupProvider";
function App() {
  return (
    <AuthProvider>
      <GroupProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <GroupChat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </GroupProvider>
    </AuthProvider>
  );
}

export default App;
