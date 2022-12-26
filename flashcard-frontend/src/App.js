import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <h1> Flash card app</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
