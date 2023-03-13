import { useCart } from "../CartContext"

const Cart = ({
    toggleModal
}) => {
    const cart = useCart()
    const tol = cart.reduce((cum, cur) => cum + Number(cur.quantity), 0)

    return (
        <div className="cart-container">
            <div className=" btn d-flex rounded-pill gap-2 fw-bold text-primary cart-btn" onClick={toggleModal}>
                <div 
                    className=""
                >Your Cart</div>
                <div className="bg-danger rounded-circle px-2">{tol}</div>
            </div>
        </div>
    )
}

export default Cart