
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './component/Homepage';
import Formpage from './component/Formpage'
import Thankupage from './component/Thankupage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/Formpage' element={<Formpage/>}/>
      <Route exact path='/Thankupage' element={<Thankupage/>}/>
      {/* <Route exact path='/Thankyou'></Route> */}
      </Routes>
    </div>
  );
}

export default App;
