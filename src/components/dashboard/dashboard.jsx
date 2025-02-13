import React from 'react'
import style from './dashbord.module.css'

function Dashboard() {
    return (
        <div className={style.Dashbord}>
            <div className={style.LeftSection}>
                <div className={style.moktail}>
                        <h2 className={style.title}>Moktail du jour</h2>
                    <div className={style.img}>
                        <img src='' alt='Moktail du jour' className={style.image} />
                    </div>
                </div>
                <div className={style.recette}>
                    <h2 className={style.title}>Recette du jour</h2>
                    <div className={style.img}>
                        <img src='' alt='Recette du jour' className={style.image} />
                    </div>
                </div>
                <div className={style.citation}>
                    <h2 className={style.title}>Citation du jour</h2>
                    <p>C'est pas le moine qui fait l'habit, c'est Léo mdr</p>
                </div>
                <div className={style.évènement}>
                    <h2 className={style.title}>Evenement du jour</h2>
                    <p>Mathieu Souflis est papa</p>
                </div>
                <div className={style.joke}>
                    <h2 className={style.title}>Blague du</h2>
                    <p>Pourquoi la vie?</p>
                    <p className={style.cliquable}>cliquez !</p>
                    <p className={style.reponse}>Mathieu Souflis</p>
                </div>
            </div>
            <div className={style.RightSection}>
                    <div className={style.Markdown}>
                        <h2 className={style.title}>Markdown</h2>                    
                         <div className={style.MarkdownContainer}>
                            <div className={style.container}>
                                <h3 className={style.SousTitre}>Mes fichiers</h3>
                                <div className={style.button}>
                                    <button>Nouveau</button>
                                    <button>Importer</button>
                                </div>
                            </div>
                        <div className={style.fichier}>
                            <p className={style.NameFichier}>file_name </p>
                            <p className={style.DateFichier}>01/02/2001 </p>
                            <div className={style.cliquable}>
                                <p className={style.edit}>edit</p>
                                <p>download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
