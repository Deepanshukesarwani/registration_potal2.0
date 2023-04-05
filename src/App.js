
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './component/Homepage';
import Formpage from './component/Formpage'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/Formpage' element={<Formpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
