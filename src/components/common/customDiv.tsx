import React from "react"
import {motion} from 'motion/react'
import type { MotionProps } from 'motion/react'


// type MotionPropsType = Record<string, number | string | MotionPropsType>;

type propType = {
    children?: React.ReactNode,
    className?: string,
    id?: string,
    plainDiv?:boolean,
    // motionProps?: React.ComponentPropsWithRef<typeof motion.div>
    motionProps?: MotionProps
} 
const CustomDiv = React.forwardRef<HTMLDivElement,propType>(
    ({children, className='', id='', plainDiv=false, motionProps={}}, ref) =>( 
        <motion.div 
            id={id} 
            {...motionProps}
            className={`${plainDiv? '' : 'w-[95%] md:w-4/5 mx-auto max-w-[1440px] px-2 md:px-0 mb-20 scroll-mt-[calc(var(--header-height)+1rem)]'} ${className}`}
            ref={ref}
            >
            {children}
        </motion.div>
    )
)
export default CustomDiv