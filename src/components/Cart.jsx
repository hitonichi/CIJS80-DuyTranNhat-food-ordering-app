import { useCart } from "../CartContext"

const Cart = ({
    toggleModal
}) => {
    const cart = useCart()
    const tol = cart.reduce((cum, cur) => cum + Number(cur.quantity), 0)

    return (
        <div className="cart-container">
            <div className="" id="cart-btn" onClick={toggleModal}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div 
                    className=""
                >Your Cart</div>
                <div className="bg-danger rounded-pill px-2">{tol}</div>
            </div>
        </div>
    )
}

export default Cart