import { useState, useEffect } from "react";

import Epingle from "../components/epingle/Epingle";
import { getMocktailData } from "../controllers/dailyDataController"

function MocktailPage() {
  const [drink, setDrink] = useState({});

  useEffect(() => {
    const getData = async () => {
      setDrink(await getMocktailData())
    }
    
    getData();
  }, []);

  return (
    <>
      {drink && (
        <div className={`flex justify-center py-20 bg-image bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${drink.strDrinkThumb})`}}>
          <div className="flex flex-col gap-5 justify-center w-[600px] bg-gray-300 pt-10 px-5 border-2 border-black">
                <div className="flex justify-between w-full mb-5">
                  <Epingle color='bg-gray-700' />
                  <Epingle color='bg-gray-700' />
                </div>
                <section className="flex justify-between w-full items-center">
                  <h1 className="text-2xl pr-4">{drink.strDrink}</h1>
                  <img
                    className="ml-auto"
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    width={200}
                  />
                </section>
                <section>
                  <p className="text-xl underline">You will need :</p>
                  <br />
                  {Object.keys(drink)
                    .filter((key) => key.startsWith("strIngredient") && drink[key])
                    .map((key) => (
                      <p key={key} className="flex justify-between w-full items-center">
                        {drink[key]}: {drink[`strMeasure${key.slice(13)}`]}
                        <img
                          className="pl-5 mt-2 mb-2"
                          src={`https://www.thecocktaildb.com/images/ingredients/${drink[key]}-Small.png`}
                          alt={drink[key]}
                          width={70}
                        />
                      </p>
                    ))}
                </section>
                <div className="w-full h-px bg-slate-400"></div>
                <section className="flex flex-col items-start">
                  <p className="text-xl underline">Instructions :</p>
                  <br />
                  <p>{drink.strInstructions}</p>
                  <br />
                </section>
          </div>
        </div>
      )}
    </>
  );
}

export default MocktailPage;
