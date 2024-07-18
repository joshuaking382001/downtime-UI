import './App.css';
import Sign from './comp/Sign';
import Reg from './comp/Reg';
import Dashboard from './comp/Dashboard';
import Add from './comp/Add';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Logs from './comp/Logs';
function App() {
  return (
    <div className="App">

{/*<Route path="/reg" element={<Reg />} />*/}
      <Routes> 
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/log" element={<Logs/>}/>
            <Route path="/sign" element={<Sign />} />
            <Route path="/reg" element={<Reg />} />
            </Routes>
    </div>
  );
}

export default App;

    