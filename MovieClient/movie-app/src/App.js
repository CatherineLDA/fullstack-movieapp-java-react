import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState();
  
  const getMovies = async () => {

    try 
    {
      const response = await api.get("api/v1/movies");

      console.log(response.data);

      setMovies(response.data);
    } 
    catch(err) 
    {
      console.log(err);
    } 
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact element={<Layout/>}>
          <Route path="/" exact element={<Home movies={movies}/>} ></Route>
          <Route path="/Trailer/:ytTrailerId" exact element={<Trailer/>} ></Route>
          <Route path="*" exact element={<NotFound/>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
