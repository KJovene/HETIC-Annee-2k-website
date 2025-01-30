import React, { useState, useEffect } from "react";

function App() {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    // Fetch a random non-alcoholic drink
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((response) => response.json())
      .then((data) => {
        const randomDrink =
          data.drinks[Math.floor(Math.random() * data.drinks.length)];
        return randomDrink.idDrink;
      })
      .then((idDrink) => {
        // Fetch the details of the selected drink
        return fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink
        );
      })
      .then((response) => response.json())
      .then((data) => {
        setDrink(data.drinks[0]);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return (
    <div>
      {drink && (
        <div>
          <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} width={200} />
          <ul>
            {Object.keys(drink)
              .filter((key) => key.startsWith("strIngredient") && drink[key])
              .map((key) => (
                <li key={key}>
                  {drink[key]}: {drink[`strMeasure${key.slice(13)}`]}
                  <br />
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${drink[key]}-Small.png`}
                    alt={drink[key]}
                    width={70}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;