import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainRoute from "./route/MainRoute"

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<MainRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
