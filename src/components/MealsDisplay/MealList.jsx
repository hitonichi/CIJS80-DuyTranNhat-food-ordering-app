import Meal from "./Meal"
import { useEffect, useState } from "react"
import mealService from '../../services/food'
import { useCartDispatch } from "../../CartContext"

const MealList = () => {
    const errorTxt = 'The menu is currently unavailable, please come back at a later time...'
    
    const [meals, setMeals] = useState([])
    const dispatch = useCartDispatch()

    useEffect(() => {
        mealService
            .getAll()
            .then(initMeals => {
                const processedData = processData(initMeals)
                setMeals(processedData)
            })
            .catch(e => {
                console.log('Server request failed');
                setMeals([])
            })
    }, [])
    
    const processData = meals => {
        const newMeals = [...meals]
        newMeals.forEach((m, id) => {
            newMeals[id].price = Number(m.price).toFixed(2)
        });
        return newMeals
    }

    const animateCart = () => {
        const cartBtn = document.getElementById('cart-btn')
        cartBtn.classList.toggle('cart-btn-animate')
        setTimeout(() => {
            cartBtn.classList.toggle('cart-btn-animate')
        }, 130);
    }

    const handleAddMeal = (e, id) => {
        e.preventDefault()
        const quantity = e.target.amount.value
        if (addMealValidation(e.target.amount)) {
            animateCart()
            
            const meal = meals.find(m => m.id === id)
            dispatch({
                type: 'add',
                id: id,
                name: meal.name,
                quantity: quantity,
                price: meal.price
            })
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
    
    return (
        <div className="meals-container">
            <div className="d-flex flex-column">
                {meals.map((meal, id) => (
                    <div className="" key={meal.id}>
                        <Meal meal={meal} handleAddMeal={handleAddMeal}></Meal>
                        {id !== meals.length - 1 && (<hr className="divider"></hr>)}
                    </div>
                    
                ))}
                {!meals.length && <div>{errorTxt}</div>}
            </div>
        </div>
    )
}

export default MealList