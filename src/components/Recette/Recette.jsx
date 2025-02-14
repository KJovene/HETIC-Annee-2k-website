import { useEffect, useState } from "react";
import style from './Recette.module.css'; 



function Recette(){

    // déclaration des variables contenant les data de l'api
    const [ingredientList, setIngredientList] = useState([]);
    const [mealName, setMealName] = useState("");
    const [instruction, setInstruction] = useState("");
    const [link, setLink] = useState("");

    //Récupération des data utile de l'api
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //Création d'une liste qui contiendra l'ensemble des ingrédients 
            const ingredient_list = [];
            console.log(data.meals[0]);
            
            //Boucle permettant de ne pas stocker les ingrédients vide
            for(let i = 1; i <= 20; i++) {
                let ingredient = data.meals[0]["strMeasure" + i];
                
                if( ingredient === "" || ingredient === " ") {
                    break
                    
                }
                else {
                    ingredient += ` ${data.meals[0]["strIngredient" + i]}`;
                    ingredient_list.push(ingredient);
                }
                
                
            }

            //initialiser les variables avec les données de l'api
            setMealName(data.meals[0].strMeal);
            setIngredientList(ingredient_list);
            setInstruction(data.meals[0].strInstructions);
            setLink(data.meals[0].strYoutube);
            
        })
        
        
    },[])    
    
    //Rendu html de la vue 
    return(
        <main className={style.container}>
            <article className={style.ficheRecette}>
                <header className={style.header}>
                    <div className={style.ping}></div>
                    <h3 className={style.title}>How to cook : {mealName}</h3>
                    <div className={style.ping}></div>
                </header>
                <section className={style.titleAndIngredient}>
                    <h4 className={style.whatDoYouNeed}>For this recipe you will need :</h4>
                    
                        {ingredientList.map((ingredient) => (
                            <p className={style.ingredient}>- {ingredient} </p>
                        ))}
                        <img src="/cook.svg" alt="cooking stuff" width={200} className={style.cookIcon}/>
                </section>
                <section>   
                    <h4 className={style.timeToCook}>Now that we have all the ingredients, it's time to cook !</h4>
                    <p className={style.instruction}>{instruction}</p>
                </section> 
                <section className={style.videoTuto}>
                    <h4>Also available on YouTube !</h4>
                    <a href={link} target="_blank">click</a>
                </section>
            </article>
            
        </main>
    )
}




export default Recette;