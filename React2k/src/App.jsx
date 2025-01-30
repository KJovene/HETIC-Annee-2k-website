import React, { useState, useEffect } from "react";

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((response) => response.json())
      .then((data) => {
        const randomDrink =
          data.drinks[Math.floor(Math.random() * data.drinks.length)];
        setDrinks([randomDrink]);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return (
    <div>
      <ul>
        {drinks.map((drink) => (
          <p key={drink.idDrink}>
            {drink.strDrink}
            <br />
            <img src={drink.strDrinkThumb} alt={drink.strDrink} width={200} />
            <br />
          </p>
        ))}
      </ul>
    </div>
  );
}

export default App;
