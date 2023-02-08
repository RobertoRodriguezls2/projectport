
import { Route, Routes, HashRouter} from "react-router-dom"
import './App.css';
import Grill from "./pages/Grill";
import Homepage from './pages/Homepage';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Gauge from "./pages/Gauge";
import Cnc from "./pages/Cnc";
import Rpm from "./pages/Rpm"
import CncAcc from "./pages/CncAcc"

import Camera from "./pages/Camera";
import Laser from "./pages/Laser";
import Compress from "./pages/Compress";
import Rgb from "./pages/Rgb";
import Lights from "./pages/Lights";

function App() {
  return (
    <>
    <HashRouter basename="/">
    <UserAuthContextProvider>

    
    <Routes>
      <Route  exact={true} path='/' element={<Homepage/>} />
      <Route  path='/grill' element={<Grill/>} />
      <Route  path='/gauge' element={<Gauge/>} />
      <Route  path='/cnc' element={<Cnc/>} />
      <Route  path='/shift' element={<Rpm/>} />
      <Route  path='/cncAcc' element={<CncAcc/>} />
      <Route  path='/carMount' element={<Camera/>} />
      <Route  path='/laser' element={<Laser />} />
      <Route  path='/compress' element={<Compress />} />
      <Route path="/rgb" element={<Rgb />} />
      <Route path="/lights" element={<Lights />} />

    </Routes>
    
    </UserAuthContextProvider>
    
    </HashRouter>
    

    
    </>
  );
}

export default App;
