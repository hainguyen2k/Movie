import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import ListMovie from "./component/Homepage/ListMovie/ListMovie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ListMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
