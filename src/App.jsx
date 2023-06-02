import './App.css'
import Home from './pages/home/Home';
import Search from './pages/searchPage/SearchPage';
import Layout from './components/layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import  fetchDataFromApi from './utils/api.js'
import { getApiConfiguration } from './store/homeSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/details/Details';
import GenrePage from './pages/genrePage/GenrePage';
import SearchPage from './pages/searchPage/SearchPage';

function App() {
  const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    // console.log(url);

    useEffect(() => {
        fetchApiConfig();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            // console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };
            
            dispatch(getApiConfiguration(url));
        });
    };
  
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path='/search' element={<Search />} />
        <Route path='/genre/:genreId' element={<GenrePage />} />
        <Route path="/search/:query" element={<SearchPage />} />


        </Route>
        <Route path='*' element={<h1>Sorry, Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
