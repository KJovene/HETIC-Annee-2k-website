export default function DefaultButton({children, onClick = () => {}}){
    return(
        <button 
            onClick={onClick} 
            className="bg-gray-300 border border-black px-2 py-1 cursor-pointer shadow-[1px 2px 0px rgba(0, 0, 0, 0.25)] hover:bg-gray-400 hover:text-white"
        >
            {children}
        </button>
    )
}
