import { Routes, Route } from 'react-router-dom';
import Artikel1 from './pages/Artikel1';
import Artikel10 from './pages/Artikel10';
import Artikel11 from './pages/Artikel11';
import Artikel12 from './pages/Artikel12';
import Artikel13 from './pages/Artikel13';
import Artikel14 from './pages/Artikel14';
import Artikel15 from './pages/Artikel15';
import Artikel2 from './pages/Artikel2';
import Artikel3 from './pages/Artikel3';
import Artikel4 from './pages/Artikel4';
import Artikel5 from './pages/Artikel5';
import Artikel6 from './pages/Artikel6';
import Artikel7 from './pages/Artikel7';
import Artikel8 from './pages/Artikel8';
import Artikel9 from './pages/Artikel9';
import Kontakdata from './pages/crud';
import Home from './pages/Home';
import Hubungi from './pages/Hubungi';
import Layanan from './pages/Layanan';
import Teka from './pages/Teka';
import Tekido from './pages/Tekido';
import Tekido2 from './pages/Tekido2';
import Tekido3 from './pages/Tekido3';
import Tekido4 from './pages/Tekido4';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tentang' element={<Teka />} />
      <Route path='/layanan' element={<Layanan />} />
      <Route path='/tekido' element={<Tekido />} />
      <Route path='/hubungi' element={<Hubungi />} />
      <Route path='/tekido2' element={<Tekido2 />} />
      <Route path='/tekido3' element={<Tekido3 />} />
      <Route path='/tekido4' element={<Tekido4 />} />
      <Route path='/admin' element={<Kontakdata />} />
      <Route path='/artikel1' element={<Artikel1 />} />
      <Route path='/artikel2' element={<Artikel2 />} />
      <Route path='/artikel3' element={<Artikel3 />} />
      <Route path='/artikel4' element={<Artikel4 />} />
      <Route path='/artikel5' element={<Artikel5 />} />
      <Route path='/artikel6' element={<Artikel6 />} />
      <Route path='/artikel7' element={<Artikel7 />} />
      <Route path='/artikel8' element={<Artikel8 />} />
      <Route path='/artikel9' element={<Artikel9 />} />
      <Route path='/artikel10' element={<Artikel10 />} />
      <Route path='/artikel11' element={<Artikel11 />} />
      <Route path='/artikel12' element={<Artikel12 />} />
      <Route path='/artikel13' element={<Artikel13 />} />
      <Route path='/artikel14' element={<Artikel14 />} />
      <Route path='/artikel15' element={<Artikel15 />} />
      </Routes>
    </div>
    
  );
}

export default App;

