import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Components/Footer'
import { TiArrowUp } from "react-icons/ti";
import ScrollToTop from 'react-scroll-to-top';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import Cart from './Pages/Cart';
import { PersistGate } from 'redux-persist/integration/react';
import { AnimatePresence } from 'framer-motion';
import FooterMain from './Components/Footer/Footer-main';
import Eltipbermek from './Components/Footer/Eltipbermek';
import SargytEtmek from './Components/Footer/SargytEtmek';
import SoragJogap from './Components/Footer/SoragJogap';
import UlanylyshDuzguni from './Components/Footer/UlanylyshDuzguni';
import GizlinlikYorelgesi from './Components/Footer/GizlinlikYorelgesi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path='/' element={<App />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Eltipbermek />} />
            <Route path='/order' element={<SargytEtmek />} />
            <Route path='/faq' element={<SoragJogap />} />
            <Route path='/terms' element={<UlanylyshDuzguni />} />
            <Route path='/privacy' element={<GizlinlikYorelgesi />} />
          </Routes>
        </AnimatePresence>
        <ScrollToTop style={{ zIndex: '10', marginBottom: '25px' }} smooth component={<TiArrowUp className='text-3xl' />} color="#6f00ff" />
        <FooterMain />
        <Footer />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);


