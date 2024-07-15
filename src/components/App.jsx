import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";

import Instructions from "./Instructions";
import MainComponent from "./MainComponent";

export const SECS_PER_QUESTION = 30;

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
