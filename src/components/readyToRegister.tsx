import CustomDiv from "@/components/common/customDiv"
import ButtonWithIcon from "@/components/common/buttonWithIcon"
import SectionDescription from "@/components/common/sectionDescription"

function ReadyToRegister() {
  return (
    <CustomDiv className="flex flex-col items-center py-10">
          <SectionDescription section="Ready to Register Your Business?" description="Join thousands of satisfied clients who have successfully registered their businesses with us" />
          <ButtonWithIcon className="bg-background text-white mt-4 md:mt-8" />  
    </CustomDiv>
  )
}

export default ReadyToRegister
