import CustomDiv from "@/components/common/customDiv"
import {Button} from '@/components/ui/button'
import SectionDescription from "@/components/common/sectionDescription"
import {Link} from 'react-router'

function ReadyToRegister() {
  return (
    <CustomDiv className="flex flex-col items-center py-10">
          <SectionDescription section="Ready to Register Your Business?" description="Join thousands of satisfied clients who have successfully registered their businesses with us" />

          <Link to ='/services'>
            <Button className="bg-background hover:bg-secondary-background active:bg-secondary-background text-white px-8">
              Get Started Now
            </Button> 
          </Link>
    </CustomDiv>
  )
}

export default ReadyToRegister
