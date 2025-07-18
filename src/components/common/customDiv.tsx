import React from "react"
type propType = {
    children: React.ReactNode,
    className?: string,
    id?: string
}
const CustomDiv = ({children, className='', id=''}:propType)=>( 
    <div id={id} className={`w-[95%] md:w-4/5 mx-auto max-w-[1440px] px-2 md:px-0 mb-20 scroll-mt-[calc(var(--header-height)+1rem)] ${className}`}>
        {children}
    </div>
)
export default CustomDiv