import React from 'react';
import style from './Navbar.module.css'

function Header()  {
    return (
        <header className={style.header}>
            <div className={style.haut}>
            <div className={style.logoContainer}>
                <img src='/LOGO_SAPALYUK.webp' className={style.logo}/>
                <h1 className={style.titre}>Sapalyuk</h1>
            </div>
            <div className={style.majEdition}>
            <p className={style.maj}>Mise à jour quotidienne entre 19h et 20h - </p>
            <span className={style.edition}> Edition du 22 Novembre 2002</span>
            </div>
            </div>
            <div className={style.nav}>
                <button>Page d'accueil</button>
                <button>Markdown</button>
                <button>Recette</button>
                <button>Moktail</button>
            </div>
        </header>
    

    

    );
};

export default  Header;





