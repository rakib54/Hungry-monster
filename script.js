const SearchButton = document.getElementById('searchButton').addEventListener('click', function () {
    const TakeInput = document.getElementById('MealInput');

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => {
            TakeInput.innerText = (data.meals);
            displayMeal(data.meals);

        })
})

const displayMeal = meals => {
    const MealsDiv = document.getElementById('meal-container')
    meals.forEach(meal => {
        const MealDiv = document.createElement('div');
        MealDiv.className = "MealDivClass";
        const MealInfo = `
                <div onclick ="displayFoodDetails('${meal.strMeal}')"  class ="AllMeals">
                <img src ="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <div>
            `
        MealDiv.innerHTML = MealInfo;
        MealsDiv.appendChild(MealDiv);
    });

}
const displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderMealsInfo(data.meals[0]);
        });
}

const renderMealsInfo = meal => {
    console.log(meal);
    const MealDetailsDiv = document.getElementById('Mealdetails');
    MealDetailsDiv.innerHTML = `
        <div class= "MealsDetails">
            <img src ="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <h5>Ingredient</h5>
            <ul>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            <li>${meal.strIngredient6}</li>
            <li>${meal.strIngredient7}</li>
            </ul>
        </div>
    `
}

