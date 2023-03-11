import Meal from "./Meal"

const MealList = ({
    meals,
    handleAddMeal
}) => {
    return (
        <div className="meals-container">
            <div className="d-flex flex-column">
                {meals.map((meal, id) => (
                    <div className="d-flex flex-column">
                        <Meal key={meal.id} meal={meal} handleAddMeal={handleAddMeal}></Meal>
                        {id !== meals.length - 1 && (<hr className="divider"></hr>)}
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default MealList