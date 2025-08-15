import { useState, useEffect } from "react"
import { Phone, Mail } from "lucide-react"

import { whatsApp } from "@/assets/images"



function NeedHelp() {
    const [topOffset, setTopOffset] = useState(0)
    
    useEffect(()=>{
        const height = document.getElementById('sticky-header')?.getBoundingClientRect().height
        console.log(height)
        setTopOffset(height? height : 0)
    })
    
  return (
    <div className={`md:basis-1/3 w-full bg-white border rounded-[20px] border-service-border px-16 md:px-10 py-10 md:sticky`} style={{top:topOffset}}>
        <h3 className="text-center text-xl font-semibold w-full pb-4 border-b">Need Help?</h3>
        <ul className="flex flex-col gap-4 mt-6">
            <li className="flex hover:text-secondary-background active:text-secondary-background transition-[color] duration-300"><Phone color="#C39A2D"/> <a href="tel:+2349059414563" className="pl-1">+234 905 941 4563</a> </li>
            <li className="flex hover:text-secondary-background active:text-secondary-background transition-[color] duration-300"><Mail color="#C39A2D"/> <a href="mailto:beejaytechy@gmail.com" className="pl-1">beejaytechy@gmail.com</a> </li>
        </ul>
        
        <a
            href="https://api.whatsapp.com/send/?phone=2349059414563&text=Hi+BeeJayTech%2C+I+need+help+with+my+business+registration&type=phone_number&app_absent=0"
            className="flex gap-2 bg-background-5 border border-business-type-border rounded-xl pl-4 py-4 mt-6" 
            target="_blank"
            >
                <img src={whatsApp} alt="beejaytech whatsapp link." />
                <p className="text-base text-secondary-foreground font-semibold underline">WhatSapp Us</p>
        </a>
    </div>
  )
}

export default NeedHelp
