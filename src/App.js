import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import WebApp from "./pages/home/WebApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/WebApp" element={<WebApp />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
