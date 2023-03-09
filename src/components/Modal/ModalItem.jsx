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

export default ModalItem