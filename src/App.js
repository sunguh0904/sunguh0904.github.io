import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
