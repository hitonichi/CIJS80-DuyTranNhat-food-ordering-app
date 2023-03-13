import React from 'react';
import { useCart, useCartDispatch } from '../../CartContext';
import CartItem from './CartItem';
import Total from './Total';
import OrderOptions from './OrderOptions';
import ModalWrapper from './ModalWrapper';

const Modal = ({
    modal,
    toggleModal,
    isOrdered,
    setOrdered
}) => {
    const cart = useCart()
    const dispatch = useCartDispatch()

    const tol = cart.length
        ? cart.reduce(
            (prev, cur) => prev + cur.price * cur.quantity,
            0).toFixed(2)
        : 0
    
    const changeQuantity = (id, amount) => {
        dispatch({
            type: "changeQuantity",
            id,
            amount
        })
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
                        <div key={meal.id}>
                            <CartItem meal={meal} changeQuantity={changeQuantity}></CartItem>
                            <hr className='border border-danger border-1'></hr>
                        </div>
                    )
                })}
            </div>
            <Total tol={tol}></Total>
            <OrderOptions toggleModal={toggleModal} setOrdered={setOrdered}></OrderOptions>
        </ModalWrapper>
    )
}

export default Modal