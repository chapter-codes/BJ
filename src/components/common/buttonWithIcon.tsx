import {Button} from '@/components/ui/button'
import {MoveUpRight} from 'lucide-react'

type customButton = {
    className?: string,
    text?: string,
    animate?:boolean
}
const ButtonWithIcon = ({className, text='Get started Now', animate}:customButton)=>(
    <Button className={`capitalize ${className} hover:bg-white hover:text-black`}>
        {text}
        <div 
            className={`flex justify-center items-center size-6 rounded-full  text-white  transition-all duration-300 
                ${animate?'animate-bounce group-hover:animate-none bg-secondary-background group-hover:bg-bg-2 ':'bg-bg-2 group-hover:bg-secondary-background'}`}
        > 
            <MoveUpRight className='w-20 object-center' /> 
        </div>
    </Button>
)
export default ButtonWithIcon
