import MealPhoto from "./MealPhoto";
import AddMealForm from "./AddMealForm";

const Meal = ({
    meal,
    handleAddMeal
}) => {
    return (
        <div className="meal-container ">
            <MealPhoto image={meal.image}></MealPhoto>
            <div className="flex-grow-1 mx-3">
                <div className="fw-bold fs-4">{meal.name}</div>
                <div className="fst-italic">{meal.description}</div>
                <div className="fw-bold fs-5 text-primary">${meal.price}</div>
            </div>
            <AddMealForm handleSubmit={(e) => handleAddMeal(e, meal.id)}></AddMealForm>
        </div>
    )
}

export default Meal