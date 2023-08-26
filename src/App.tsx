import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Charts from "./pages/Charts_Maps";
import Sidebar from "./components/Sidebar/Sidebar";
import Contactmodal from "./components/Modal/Contact_Modal";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Contactmodal  />
      <Routes>
        <Route path="/" Component={Contact} />
        <Route path="/charts" Component={Charts} />
      </Routes>
    </div>
  );
}

export default App;
