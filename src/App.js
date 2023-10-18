
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/fitpeo" element={<Layout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
      
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
