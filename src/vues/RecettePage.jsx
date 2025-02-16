import { useEffect, useState } from "react";

import { getRecette } from "../controllers/apiController";

import Epingle from "../components/epingle/Epingle";
import { getRecetteData } from "../controllers/dailyDataController";

function RecettePage(){

    const [ingredientList, setIngredientList] = useState([]);
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const getData = async () => {
            const recetteData = await getRecetteData()
            const meal = recetteData[0];
            const ingredient_list = recetteData[1];
            setMeal(meal)
            setIngredientList(ingredient_list);
        }

        getData()

    },[])    
    
    return(
        <div className={`flex relative justify-center`}>
            <img className="absolute -z-50 top-0 left-0 w-full h-full" src={meal.strMealThumb}/>
            <article className="flex flex-col bg-[var(--beige)] w-3/5 pb-5 mt-28 p-5">
                <header className="flex flex-row justify-between">
                    <Epingle color="bg-orange-950" />
                    <h3 className="text-2xl font-['Itim']">How to cook : {meal.strMeal}</h3>
                    <Epingle color="bg-orange-950" />
                </header>
                <section className="flex flex-row justify-between items-start mt-36 mb-10 text-xl">
                        <div>
                            <h4 className="font-['Itim']">For this recipe you will need :</h4>
                            {ingredientList.map((ingredient, index) => (
                                <p key={index} className="font-['Itim']"> - {ingredient} </p>
                            ))}
                        </div>
                        <img src="/cook.svg" alt="cooking stuff" width={200}/>
                </section>
                <section className="">   
                    <h4 className="mt-24 mb-15 text-xl font-['Itim']">Now that we have all the ingredients, it's time to cook !</h4>
                    <p className="font-['Itim']">{meal.strInstructions}</p>
                </section> 
                <section className="flex flex-col items-center mt-24 gap-5">
                    <h4 className="font-['Itim']">Also available on YouTube !</h4> 
                    <a href={meal.strYoutube} className="underline text-blue-600" target="_blank">click</a>
                </section>
            </article>
        </div>
    )
}

export default RecettePage;
