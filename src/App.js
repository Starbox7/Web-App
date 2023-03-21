import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import WebApp from "./pages/WebApp";
import CFD from "./pages/CFD";
import WST from "./pages/WST";
import Basketball from "./pages/Basketball";
import JQuery from "./pages/JQuery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/JQuery" element={<JQuery />} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/WST" element={<WST />} />
          <Route path="/CFD" element={<CFD />} />
          <Route path="/WebApp" element={<WebApp />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
