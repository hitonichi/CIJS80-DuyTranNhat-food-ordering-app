import  Button from "react-bootstrap/esm/Button"

const AddMealForm = ({
    handleSubmit
}) => {
    return (
        <form className="d-flex flex-column flex-shrink-0 w-25" onSubmit={handleSubmit}>
                <div className="d-flex justify-content-md-end">
                    <div className="col-md-auto fw-bold p-0">
                        <label htmlFor="amount">Amount:</label>
                    </div>
                    <div className="col-md-3 ">
                        <input style={{width: "100%"}} type="number" min={1} id="amount" defaultValue={1} className="rounded border-secondary"></input>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-2">
                        <Button type="submit" variant="outline-danger" className="rounded-pill px-2 text-center addToCart-btn" size="sm">+Add</Button>
                </div>
        </form>
    )
}

export default AddMealForm