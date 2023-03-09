import {useForm} from 'react-hook-form'

import FoodServices from '../services/food'
import '../styles/modal.css'
import React, {useContext, useState} from 'react';
import { CartContext } from '../CartContext';

const ModalItem = ({
    meal,
    changeQuantity
}) => {
    return (
        <div key={meal.id} className="cart-meal-container">
            <div className='cart-meal-info'>
                <div className='fs-4 fw-bold'>{meal.name}</div>
                <div className='meal-price-n-quantity'>
                    <div className='fw-bold text-primary'>${meal.price}</div>
                    <div className='border border-secondary rounded px-1 fs-6 fw-bold ms-2'>x {meal.quantity}</div>
                </div>
            </div>
            <div className='hori'>
                <button className='btn btn-outline-primary' onClick={() => changeQuantity(meal.id, -1)}>-</button>
                <button className='btn btn-outline-primary' onClick={() => changeQuantity(meal.id, 1)}>+</button>
            </div>
        </div>
    )
}

const Total = ({
    cart
}) => {
    const tol = cart.length
        ? cart.reduce(
            (prev, cur) => prev + cur.price * cur.quantity,
            0).toFixed(2)
        : 0
    return (
        <div className="total-price">
            <div>
                Total Amount
            </div>
            <div>
                ${tol}
            </div>
        </div>
    )
}

const OrderOptions = ({
    toggleModal,
    setOrdered
}) => {
    const [isOrdering, setOrdering] = useState(false)
    
    const {cart, setCart} = useContext(CartContext)
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const openOrder = () => {
        if (cart.length === 0) {
            alert('Cart doesn\'t have anything!')
            return
        }
        setOrdering(!isOrdering)
    }

    const onSubmit = data => {
        FoodServices
            .create(data)
            .then((response) => {
                console.log(response);
                setOrdered(true)
                setCart([])
            })
    }
    
    if (isOrdering) {
        return (
            <div className='overflow-auto'>
                hehe
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex flex-column'>
                        <label htmlFor='name'>Your Name</label>
                        <input className={errors.name ? 'bg-danger' : ''} {...register("name", {required: true})}></input>
                        {errors?.name && <span>Please input a valid name!</span>}

                        <label htmlFor='street'>Street</label>
                        <input className={errors.street ? 'bg-danger' : ''} {...register("street", {required: true})}></input>
                        {errors?.street && <span>Please input a valid street!</span>}
                        
                        <label htmlFor='postal'>Postal Code</label>
                        <input className={errors.postal ? 'bg-danger' : ''} {...register("postal", {required: true, pattern: /[0-9]{5}/, max: 99999})}></input>
                        {errors?.postal && <span>Please input a valid postal code (5 digits long)!</span>}

                        <label htmlFor='city'>City</label>
                        <input className={errors.city ? 'bg-danger' : ''} {...register("city", {required: true})}></input>
                        {errors?.city && <span>Please input a valid city!</span>}

                        <div className='d-flex'>
                            <button
                                className='modal-close-btn'
                                onClick={() => {
                                    reset()
                                    setOrdering(!isOrdering)
                                }}
                            >
                                Cancel</button>
                            <button className='btn' type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div>
            <button className="modal-close-btn" onClick={toggleModal}>Close</button>
            <button className='modal-close-btn' onClick={() => openOrder()}>Order</button>
        </div>
    )
}

const ModalWrapper = (props) => {
    if (props.modal) {
        return (
            <div className="Modal">
                <div className="Modal-overlay" >
                    <div className="Modal-content">
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const Modal = ({
    modal,
    toggleModal,
    isOrdered,
    setOrdered
}) => {
    const {cart, setCart} = useContext(CartContext)

    
    const changeQuantity = (id, diff) => {
        const newCart = [...cart]
        const mealIdx = newCart.findIndex(m => m.id === id)
        if (newCart[mealIdx].quantity === 1 && diff === -1) {
            newCart.splice(mealIdx, 1)
        } else {
            newCart[mealIdx].quantity += diff
        }
        setCart(newCart)
    }

    if (isOrdered) {
        return (
            <ModalWrapper modal={modal}>
                <div>Order complete</div>
                <button className="modal-close-btn" onClick={toggleModal}>Close</button>
            </ModalWrapper>
        )
    }
    return (
        <ModalWrapper modal={modal}>
            {cart.map(meal => {
                return (
                    <div>
                        <ModalItem key={meal.id} meal={meal} changeQuantity={changeQuantity}></ModalItem>
                        <hr className='border border-danger border-1'></hr>
                    </div>
                )
            })}
            <Total cart={cart}></Total>
            <OrderOptions toggleModal={toggleModal} setOrdered={setOrdered}></OrderOptions>
        </ModalWrapper>
    )
}

export default Modal