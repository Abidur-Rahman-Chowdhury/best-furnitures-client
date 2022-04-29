import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home>} ></Route>
        <Route path='/home' element={ <Home></Home>}></Route>
        <Route path='/blogs' element={ <Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
