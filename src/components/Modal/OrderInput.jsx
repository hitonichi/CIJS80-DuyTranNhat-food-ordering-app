const OrderInput = ({
    type,
    error,
    register
}) => {
    if (type === "postal") return (
        <div className="order-input">
            <label className={error ? 'fw-bold text-danger' : 'fw-bold'} htmlFor='postal'>Postal Code</label>
            <input className={error ? 'bg-danger invalid-input rounded' : 'rounded'} {...register("postal", {required: true, pattern: /[0-9]{5}/, max: 99999})}></input>
            {error && <span>Please input a valid postal code (5 digits long)!</span>}
        </div>
    )
    return (
        <div className="order-input">
            <label className={error ? 'fw-bold text-danger' : 'fw-bold'} htmlFor={type}>Your {type}</label>
            <input className={error ? 'bg-danger invalid-input rounded' : 'rounded'} {...register(type, {required: true})}></input>
            {error && <span>Please input a valid {type}!</span>}
        </div>
    )
}

export default OrderInput