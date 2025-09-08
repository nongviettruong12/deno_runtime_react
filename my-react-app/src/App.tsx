import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { Dinosaur } from "./pages/Dinosaur";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:selectedDinosaur" element={<Dinosaur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
