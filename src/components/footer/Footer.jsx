// export default () => {
//     return <></>
// }
import style from "./Footer.module.css";

function Footer(){
    return(
        <main className={style.footer}>
            <section>
                <div className={style.SapulyukLogo}>
                    <img src="/LOGO_SAPULYUK.webp" alt="SapulyukLogo" width={35} height={35} className={style.img} />
                    <h3 className={style.Sapulyuk}>Sapulyuk</h3>
                </div>
            </section>
            <section className={style.copyright}>
                <img src="/Copyright.svg.png" alt="copyright" width={15} height={15} className={style.copyrightIcon}/>
                <p>2002, Sapulyuk</p>
            </section>
            <section className={style.mentionAndStatus}>
                <p>Legals</p>
                <p>Status</p>
            </section>
            <section className={style.contact}>
                <p>Contact us :</p>
                <p>contact@sapulyuk.fr</p>
            </section>
        </main>
    )
}

export default  Footer;