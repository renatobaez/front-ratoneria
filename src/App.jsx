import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CardProvider } from "./context/CardContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <CardProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CardProvider>
    </AuthProvider>
  );
}

export default App;
