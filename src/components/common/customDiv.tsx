import React from "react"
type propType = {
    children: React.ReactNode,
    className?: string
}
const CustomDiv = ({children, className=''}:propType)=>( 
    <div className={`w-[95%] md:w-4/5 mx-auto max-w-[1440px] px-2 md:px-0 ${className}`}>
        {children}
    </div>
)
export default CustomDiv