import MealPhoto from "./MealPhoto";
import AddMealForm from "./AddMealForm";

const Meal = ({
    meal,
    handleAddMeal
}) => {

    const toggleDesc = (e) => {
        console.log('clicked: ', e.target);
    }
    
    return (
        <div className="meal-container mobile-collapsible">
            <MealPhoto image={meal.image}></MealPhoto>
            <div className="meal-info">
                <div className="meal-name">{meal.name}</div>
                <div className="meal-description fst-italic"
                     onClick={(e) => {toggleDesc(e)}}>
                        {meal.description}</div>
                <div className="meal-price ">${meal.price}</div>
            </div>
            <AddMealForm handleSubmit={(e) => handleAddMeal(e, meal.id)}></AddMealForm>
        </div>
    )
}

export default Meal