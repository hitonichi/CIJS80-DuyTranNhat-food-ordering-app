const AddMealForm = ({
    handleSubmit
}) => {
    return (
        <form className="add-meal-form" onSubmit={handleSubmit}>
                <div className="d-flex gap-2 justify-content-md-end add-meal-form-body">
                        <label htmlFor="amount">Amount:</label>
                        <input style={{width: "100%"}} type="number" min={1} id="amount" defaultValue={1} className="rounded meal-amount-cnt"></input>
                </div>
                <div className="add-meal-form-btn">
                    <button type="submit" className="btn btn-primary rounded-pill text-center addToCart-btn">+Add</button>
                </div>
        </form>
    )
}

export default AddMealForm