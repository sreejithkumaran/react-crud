import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/{id}" element={<EditUser />} />
      </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
