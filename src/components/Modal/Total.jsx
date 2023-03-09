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

export default Total