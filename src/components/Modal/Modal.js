import React from 'react';
import { useCart, useCartDispatch } from '../../CartContext';
import CartItem from './CartItem';
import Total from './Total';
import OrderOptions from './OrderOptions';
import ModalWrapper from './ModalWrapper';
import CartEmpty from '../CartEmpty';

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

    const animateCart = () => {
        const cartBtn = document.getElementById('cart-btn')
        cartBtn.classList.toggle('cart-btn-animate')
        setTimeout(() => {
            cartBtn.classList.toggle('cart-btn-animate')
        }, 130);
    }

    const changeQuantity = (id, amount) => {
        animateCart()

        dispatch({
            type: "changeQuantity",
            id,
            amount
        })
    }

    if (isOrdered) {
        return (
            <ModalWrapper modal={modal}>
                <div>Order complete.</div>
                <button className="btn btn-primary rounded-pill mt-2" onClick={toggleModal}>Close</button>
            </ModalWrapper>
        )
    }

    return (
        <ModalWrapper modal={modal}>
            {cart.length < 1 ?
                <CartEmpty toggleModal={toggleModal} />
                :
                <>
                    <div className="modal-meal-list">
                        {cart.map(meal => {
                            return (
                                <div key={meal.id}>
                                    <CartItem meal={meal} changeQuantity={changeQuantity}></CartItem>
                                    <hr className='divider'></hr>
                                </div>
                            )
                        })}
                    </div>
                    <Total tol={tol}></Total>
                    <OrderOptions toggleModal={toggleModal} setOrdered={setOrdered}></OrderOptions>
                </>
            }
        </ModalWrapper>
    )
}

export default Modal