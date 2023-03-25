import { useCart, useCartDispatch } from '../../CartContext'
import FoodServices from '../../services/food'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import OrderInput from './OrderInput'

const OrderOptions = ({
    toggleModal,
    setOrdered
}) => {
    const [isOrdering, setOrdering] = useState(false)
    
    const cart = useCart()
    const dispatch = useCartDispatch()
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const openOrder = () => {
        if (cart.length === 0) {
            alert('Cart doesn\'t have anything!')
            return
        }
        setOrdering(!isOrdering)
    }

    const resetMealCnt = async () => {
        const inputs = Array.from(document.getElementsByClassName('meal-amount-cnt'))
        inputs.forEach(input => {
            input.value = 1
        });
    }

    const onSubmit = data => {
        // add cart info into the sending data
        data = {...data, cart};
        
        FoodServices
            .create(data)
            .then((res) => {
                // console.log(res);
                resetMealCnt()
                setOrdered(true)
                dispatch({
                    type: "clear"
                })
            })
            .catch(e => {
                alert('Your order cannot be processed right now. Please try again later.')
                // console.log(e);
            })
    }
    
    if (isOrdering) {
        return (
            <div className='order-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex flex-column'>
                        <OrderInput
                            type="name"
                            error={errors.name}    
                            register={register}
                        ></OrderInput>

                        <OrderInput
                            type="street"
                            error={errors.street}    
                            register={register}
                        ></OrderInput>
                        
                        <OrderInput
                            type="postal"
                            error={errors.postal}    
                            register={register}
                        ></OrderInput>

                        <OrderInput
                            type="city"
                            error={errors.city}    
                            register={register}
                        ></OrderInput>

                        <div className='order-nav mt-2'>
                            <button
                                className='btn btn-outline-primary rounded-pill fw-bold'
                                onClick={() => {
                                    reset()
                                    setOrdering(!isOrdering)
                                }}
                            >
                                Cancel</button>
                            <button
                                className='btn btn-primary rounded-pill fw-bold text-light' 
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className='order-nav'>
            <button className="btn btn-outline-primary rounded-pill fw-bold" onClick={toggleModal}>Close</button>
            <button className='btn btn-primary rounded-pill text-light fw-bold' onClick={() => openOrder()}>Order</button>
        </div>
    )
}

export default OrderOptions