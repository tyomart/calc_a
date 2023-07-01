import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Calculator from './calculator/calculator';

import Quatomator_rou from './routes/quatomator_rou';
import Calculator_rou from './routes/calculator_rou';
import Markdown_rou from './routes/markdown_rou';
import Navigator from './routes/navigator';

function App() {
  return (
    <>
<Router>
    <Routes>

    <Route path='/calc_a' element={<Navigator/>} //id='navigator-onapp' //path='/calc_a' // path='/'
    >
          {/* <Route index element={<Main_route  />} /> */}
          
          <Route path='calc_a/calculator' index element={<Calculator_rou />} //path='calc_a/calculator'
          />
          <Route path='calc_a/quotamat' element={<Quatomator_rou />} //path='calc_a/quotamat'
          />
          {/* <Route path='quotamat' element={<Quatomator_rou />} //path='calc_a/quotamat'
          /> */}
          <Route path='calc_a/markdown' element={<Markdown_rou />} //path='calc_a/markdown' //path='markdown' 
          />

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
