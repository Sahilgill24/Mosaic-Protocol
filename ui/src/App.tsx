import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Onboarding from "./pages/onboarding";
import Connect from "./pages/connect";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
