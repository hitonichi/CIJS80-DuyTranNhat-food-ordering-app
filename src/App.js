import './App.css';
import './styles/main.css'

import { useState } from 'react';
import { CartProvider } from './CartContext';

import Modal from './components/Modal/Modal';
import Header from './components/Header';
import Cart from './components/Cart';
import Title from './components/Title';
import About from './components/About';
import MealList from './components/MealsDisplay/MealList';

const App = () => {
  const [modal, setModal] = useState(false)
  const [isOrdered, setOrdered] = useState(false)

  const toggleModal = () => {
    if (isOrdered) {setOrdered(false)}
    setModal(!modal)
  }

  if (modal) {
      document.body.classList.add('active-modal')
  } else {
      document.body.classList.remove('active-modal')
  }
  
  return (
    <div>
      <CartProvider>
          <Modal modal={modal} toggleModal={toggleModal} isOrdered={isOrdered} setOrdered={setOrdered}></Modal>
          <Header>
            <Title></Title>
            <Cart toggleModal={toggleModal}></Cart>
          </Header>
        
          <div className="content-container">
            <About></About>
            <MealList ></MealList>
          </div>
      </CartProvider>
    </div>
  )
}

export default App;
