import './App.css'
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Layout from './components/layout/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/search' element={<Search />} />
        </Route>
        <Route path='*' element={<h1>Sorry, Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
