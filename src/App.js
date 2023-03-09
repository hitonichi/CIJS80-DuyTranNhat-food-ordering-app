import './App.css';
import './styles/main.css'

import { useState, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import mealService from './services/food'

import Modal from './components/Modal/Modal';
import Header from './components/Header';
import Cart from './components/Cart';
import Title from './components/Title';
import About from './components/About';
import MealList from './components/MealsDisplay/MealList';

const App = () => {
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])
  const [isOrdered, setOrdered] = useState(false)
  const [meals, setMeals] = useState([])

  useEffect(() => {
    mealService
      .getAll()
      .then(initMeals => {
        const processedData = processData(initMeals)
        setMeals(processedData)
      })
      .catch(e => {
        console.log('Fail', e);
      })
  }, [])

  const processData = meals => {
    const newMeals = [...meals]
    newMeals.forEach((m, id) => {
      newMeals[id].price = Number(m.price).toFixed(2)
    });
    return newMeals
  }
  
  const toggleModal = () => {
    if (isOrdered) {setOrdered(false)}
    setModal(!modal)
  }

  const handleAddMeal = (e, id) => {
    e.preventDefault()
    const quantity = e.target.amount.value
    if (addMealValidation(e.target.amount)) {
      addToCart(id, quantity)
    } else {
      alert('Invalid Input!')
    }
  }

  const addMealValidation = (amountInput) => {
    if (isNaN(amountInput.value) || amountInput.value <= 0) {
      return false
    }
    return true
  }

  const addToCart = (id, quantity) => {
    const mealId = cart.findIndex(m => m.id === id)
    if (mealId === -1) {
      const meal = meals.find(m => m.id === id)
      const newMeal = {
        id,
        name: meal.name,
        price: meal.price,
        quantity: Number(quantity)
      }
      setCart(cart.concat(newMeal))
    } else {
      const newCart = [...cart]
      newCart[mealId].quantity += Number(quantity)
      setCart(newCart)
    }
  }
  
  if (modal) {
      document.body.classList.add('active-modal')
  } else {
      document.body.classList.remove('active-modal')
  }
  
  return (
    <div>
      <CartContext.Provider value={{cart, setCart}}>
        <Modal modal={modal} toggleModal={toggleModal} isOrdered={isOrdered} setOrdered={setOrdered}></Modal>
        <Header>
          <Title></Title>
          <Cart toggleModal={toggleModal}></Cart>
        </Header>
      </CartContext.Provider>
      
      <div className="content-container">
        <About></About>
        <MealList meals={meals} handleAddMeal={handleAddMeal}></MealList>
      </div>
    </div>
  )
}

export default App;
