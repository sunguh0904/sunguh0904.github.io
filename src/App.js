import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import MainRoute from "./route/MainRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<MainRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
