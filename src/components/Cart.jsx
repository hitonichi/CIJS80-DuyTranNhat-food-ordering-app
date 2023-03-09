import { useContext } from "react"
import { CartContext } from "../CartContext"

const Cart = ({
    toggleModal,
}) => {
    const {cart} = useContext(CartContext)

    const quantity = cart.reduce((prev, cur) => 
        prev += cur.quantity, 0)

    return (
        <div className="cart-container">
            <div className="btn btn-primary d-flex rounded-pill gap-2 fw-bold text-light" onClick={toggleModal}>
                <div 
                    className=""
                >Open Cart</div>
                <div className="bg-danger rounded-circle px-2">{quantity}</div>
            </div>
        </div>
    )
}

export default Cart