import {Button} from '@/components/ui/button'
import {MoveUpRight} from 'lucide-react'

type customButton = {
    className?: string,
    text?: string
}
const ModifiedButton = ({className, text='Get started Now'}:customButton)=>(
    <Button className={className}>
        {text}
        <div className="flex justify-center items-center size-6 rounded-full bg-bg-2 text-white"> <MoveUpRight className='w-20 object-center' /> </div>
    </Button>
)
export default ModifiedButton
