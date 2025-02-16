function Footer(){
    return(
        <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row items-end gap-2.5">
                <img src="/LOGO_SAPULYUK.webp" alt="SapulyukLogo" className="aspect-square h-9" />
                <h3 className="self-end italic">Sapulyuk</h3>
            </div>
            <p className="self-end">© 2002, Sapulyuk</p>
            <div className="flex flex-col justify-end text-xs gap-4">
                <p>Legals</p>
                <p>Status</p>
            </div>
            <div className="flex flex-col justify-end text-xs gap-4">
                <p>Contact us :</p>
                <p>contact@sapulyuk.com</p>
            </div>
        </div>
    )
}

export default Footer;
