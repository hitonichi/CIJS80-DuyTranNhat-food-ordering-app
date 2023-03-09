import Meal from "./Meal"
import Stack from 'react-bootstrap/Stack'

const MealList = ({
    meals,
    handleAddMeal
}) => {
    return (
        <div className="meals-container">
            <Stack gap={4}>
                {meals.map(meal => (
                    <Meal key={meal.id} meal={meal} handleAddMeal={handleAddMeal}></Meal>
                ))}
            </Stack>
        </div>
    )
}

export default MealList