import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* ESTE DIV, se encarga de tomar TODA LA PAGINA NAV MAIN Y FOOTER Y USAR FLEX PARA ORDENARLA EN 3
        SECCIONES LAS CUALES DEJE PINTADAS PARA QUE LAS VEAN */}
        <Navbar />
        <main className="flex-1 border border-green-500">
          {" "}
          {/* EL MAIN VA A QUEDAR POR AHORA OCUPANDO SIEMPRE TODO EL ESPACIO ENTRE EL NAVBAR Y EL FOOTER*/}
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
