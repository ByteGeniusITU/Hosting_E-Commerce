//import logo from './logo.svg';
//import './App.css';
import Main from "./main";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
