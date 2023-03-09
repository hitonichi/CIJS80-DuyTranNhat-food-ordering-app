import {useForm} from 'react-hook-form'

import FoodServices from '../../services/food'
import React, {useContext, useState} from 'react';
import { CartContext } from '../../CartContext';
import ModalItem from './ModalItem';
import Total from './Total';
import OrderOptions from './OrderOptions';
import ModalWrapper from './ModalWrapper';

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
            <div className="modal-meal-list">
                {cart.map(meal => {
                    return (
                        <div>
                            <ModalItem key={meal.id} meal={meal} changeQuantity={changeQuantity}></ModalItem>
                            <hr className='border border-danger border-1'></hr>
                        </div>
                    )
                })}
            </div>
            <Total cart={cart}></Total>
            <OrderOptions toggleModal={toggleModal} setOrdered={setOrdered}></OrderOptions>
        </ModalWrapper>
    )
}

export default Modal