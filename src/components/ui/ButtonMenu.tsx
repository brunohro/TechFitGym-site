type Props = {
    funcao:() => void
}
export function ButtonMenu({funcao}: Props){
    return (
        <button className="flex items-center gap-3 text-white" onClick={funcao}>
            <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    )
}