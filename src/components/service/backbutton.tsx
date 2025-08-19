import { useNavigate } from "react-router"
import { backArrow } from "@/assets/images"

function Backbutton() {
  const navigate = useNavigate()

    const handleClick = ()=>{
        navigate(-1)
        // setTimeout(()=>document.body.style.overflow = 'auto', 0)
    }

    return (
        <button 
            className="flex gap-1 items-center text-background bg-tertiary-background w-full mt-4" 
            onClick={()=>handleClick()}
            >
            <img src={backArrow} alt="back button" className="w-5"/>
            Back to Home
        </button> 
    )}

export default Backbutton
