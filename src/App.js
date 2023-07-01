import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Calculator from './calculator/calculator';

import Quatomator_rou from './routes/quatomator_rou';
import Calculator_rou from './routes/calculator_rou';
import Navigator from './routes/navigator';

function App() {
  return (
    <>
<Router>
    <Routes>

    <Route path='/calc_a' element={<Navigator/>} //id='navigator-onapp'
    >
          {/* <Route index element={<Main_route  />} /> */}
          
          <Route path='/calculator' index element={<Calculator_rou />} />
          <Route path='/quotamat' element={<Quatomator_rou />} />

          {/* <Route path='markdown' element={<Markdown_rou />} />
          <Route path='test' element={<Test_rou />} /> */}

    </Route> 



    </Routes>

    </Router>
     {/* <Calculator /> */}
    </>
  );
}

export default App;
