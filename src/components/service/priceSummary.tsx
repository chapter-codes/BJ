import { useEffect, useState } from "react"


type PriceSummaryProps = {
    price?:number
}
function PriceSummary({price = 0}:PriceSummaryProps) {
    const [topOffset, setTopOffset] = useState(0)

    useEffect(()=>{
        const height = document.getElementById('sticky-header')?.getBoundingClientRect().height
        setTopOffset(height? height : 0)
    })

  return (
    <div className={`md:basis-1/3 grow w- max-w-[387px] bg-white border rounded-[20px] border-service-border px-16 md:px-10 py-10 md:`} style={{top:topOffset}}>
        <h3 className="text-center text-xl font-semibold w-full pb-4 border-b">₦ Price Summary</h3>
        <div className="flex justify-between text-xl text-secondary-foreground font-semibold mt-4">
            <p className="">total</p>
            <p className="">{`₦ ${price}`}</p>
        </div>    
    </div>
  )
}

export default PriceSummary
