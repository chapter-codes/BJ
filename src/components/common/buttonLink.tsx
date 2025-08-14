import {Link} from 'react-router'
import {Button} from '@/components/ui/button'


function ButtonLink() {
  return (
    <Button className="text-foreground" asChild >
        <Link to={'/services'} 
            >
            Get started Now
        </Link>
    </Button>
  )
}

export default ButtonLink
