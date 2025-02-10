import React, { useState, useEffect } from "react";
import styles from "./MocktailStyle.module.css";

function Mocktail() {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
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
        return fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink
        );
      })
      .then((response) => response.json())
      .then((data) => {
        setDrink(data.drinks[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (drink && drink.strDrinkThumb) {
      document.body.style.backgroundImage = `url(${drink.strDrinkThumb})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    }
  }, [drink]);

  return (
    <section className={styles.container}>
      <div className={styles.containerMocktail}>
        {drink && (
          <div className={styles.HeadMocktail}>
            <section className={styles.containerPoints}>
              <div className={styles.Points}></div>
              <div className={styles.Points}></div>
            </section>
            <section className={styles.Head}>
              <section className={styles.titreMocktail}>
                <h1 className={styles.NomMocktail}>{drink.strDrink}</h1>
                <img
                  className={styles.imgMocktail}
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  width={200}
                />
              </section>
            </section>
            <br />
            <div>
              <p className={styles.need}>You will need :</p>
              <br />
              {Object.keys(drink)
                .filter((key) => key.startsWith("strIngredient") && drink[key])
                .map((key) => (
                  <p key={key} className={styles.ingredients}>
                    {drink[key]}: {drink[`strMeasure${key.slice(13)}`]}
                    <img
                      className={styles.imgMocktailIngredient}
                      src={`https://www.thecocktaildb.com/images/ingredients/${drink[key]}-Small.png`}
                      alt={drink[key]}
                      width={70}
                    />
                  </p>
                ))}
            <hr />
            </div>
            <br />
            <div className={styles.preparation}>
              <p className={styles.instructions}>Instructions :</p>
              <br />
              <p className={styles.bodyInstructions}>{drink.strInstructions}</p>
              <br />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Mocktail;