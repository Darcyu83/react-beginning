import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Movies from "./routes/Movies";

import Cat from "./components/Cat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path="cat" element={<Cat />}></Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
        <Route path={"/movie/:id"} element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
