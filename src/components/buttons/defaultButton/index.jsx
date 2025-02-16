export default function DefaultButton({children, onClick = () => {}}){
    return(
        <button 
            onClick={onClick} 
            className="bg-gray-300 border border-black px-2 py-1 cursor-pointer hover:bg-gray-400 hover:text-white"
        >
            {children}
        </button>
    )
}
