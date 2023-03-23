import './App.css';
import './styles/main.css'

import { useState } from 'react';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Modal from './components/Modal/Modal';
import Header from './components/Header';
import Cart from './components/Cart';
import Title from './components/Title';
import About from './components/About';
import AboutPage from './components/AboutPage';
import MealList from './components/MealsDisplay/MealList';
import Navbar from './components/Navbar';

const App = () => {
  const [modal, setModal] = useState(false)
  const [isOrdered, setOrdered] = useState(false)

  const toggleModal = () => {
    if (isOrdered) { setOrdered(false) }
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <Router>
        <CartProvider>
          <Modal modal={modal} toggleModal={toggleModal} isOrdered={isOrdered} setOrdered={setOrdered}></Modal>
          <Header>
            <Title></Title>
            <Navbar />
            <Cart toggleModal={toggleModal}></Cart>
          </Header>

          <div className="content-container">
            <About></About>
            <Routes>
              <Route path="/" element={<MealList></MealList>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/coupon" element={<h1>Coupon Page</h1>} />
              <Route path="/contact" element={<h1>Contacts Page</h1>} />
            </Routes>
          </div>
        </CartProvider>
      </Router>
    </div>
  )
}

export default App;
