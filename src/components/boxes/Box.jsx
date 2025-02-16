// AJOUTER LA TAILLE DE POLICE

export default function Box({ title, children, className="" }) {
    return (
        <div className={`bg-red w-full flex flex-col ${className}`}>
            <div className="w-full p-2 bg-[var(--orange)]">
                <h2 className="">{title}</h2>
            </div>
            <div className="p-2 bg-[var(--beige)] h-full">
                {children}
            </div>
        </div>
    );
}