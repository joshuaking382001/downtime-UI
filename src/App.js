import './App.css';
import Sign from './comp/Sign';
import Reg from './comp/Reg';
import Dashboard from './comp/Dashboard';
import Add from './comp/Add';
import Foot from './comp/Foot';
import Account from './comp/Account';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Logs from './comp/Logs';
function App() {
  return (
    <div className="App">
      <Account/>
      {/*<Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/log" element={<Logs />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
      <Foot />*/}
    </div>
  );
}

export default App;

