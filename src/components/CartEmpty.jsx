const CartEmpty = ({ toggleModal }) => {
    return (
        <div className="text-center">
            <h4 className="">Your cart is empty</h4>
            <p className="">Looks like you haven't added anything to your cart yet</p>
            <button className="btn btn-primary text-white" onClick={toggleModal}>Back To Order</button>
        </div>
    );
}

export default CartEmpty;