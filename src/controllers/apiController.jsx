const apiToJson = async  (url) => {
  try{
    const response = await fetch(url)
    return await response.json()
  } catch(err){console.log(err)};
  
}

export async function getCitation() {
  try {
    const citation = await apiToJson("https://api.adviceslip.com/advice");
    return citation.slip.advice;
  }catch (err) {
    console.log(err)
  }
}

export async function getBlague() {
  try {
    const blague = await apiToJson("https://official-joke-api.appspot.com/random_joke");
    return blague.setup + " ---> " + blague.punchline;
  }catch (err) {
    console.log(err)
  }
}

export async function getMocktail() {
  try {
    const data = await apiToJson("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    
    const randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)];
    
    const drinksData = await apiToJson("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + randomDrink.idDrink);
    
    return drinksData.drinks[0];
  }catch (err) {
    console.log(err)
  }
}

export async function getRecette() {
  try {
    const data = await apiToJson('https://www.themealdb.com/api/json/v1/1/random.php')
    const ingredient_list = [];
    const meal = data.meals[0];     
  
    //Boucle permettant de ne pas stocker les ingrédients vide
    for(let i = 1; i <= 20; i++) {
        let ingredient = meal["strMeasure" + i];
        
        if( ingredient === "" || ingredient === " ") {
            break   
        }
        else {
            ingredient += ` ${meal["strIngredient" + i]}`;
            ingredient_list.push(ingredient);
        }
    }
    
    
    return [meal, ingredient_list];
  }catch (err) {
    console.log(err)
  }
}

export async function getEvenement() {
  try {
    const evenement =  await apiToJson("https://history.muffinlabs.com/date");
    return evenement.data.Events[0].text
  }catch (err) {
    console.log(err)
  }
}
