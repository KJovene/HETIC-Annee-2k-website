const apiToJson(url){
  return await fetch(url).json()
}

export async function citation() {
  return apiToJson("https://api.adviceslip.com/advice");
}

export async function blague() {
  return apiToJson("https://official-joke-api.appspot.com/random_joke");
}

export async function moktail() {
  return apiToJson("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
}

export async function recette() {
  return apiToJson("https://www.themealdb.com/api/json/v1/1/random.php");
}




