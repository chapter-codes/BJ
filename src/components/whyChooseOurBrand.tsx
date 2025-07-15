import CustomDiv from '@/components/common/customDiv'
import SectionDescription from '@/components/common/sectionDescription'

function whyChooseOurBrand() {
  return <CustomDiv className='my-4 lg:my-10'>
        <SectionDescription 
            section='why choose our brand?'
            description='At BeeJayTech, we guide you through every step of CAC registration, making the process fast, simple, and stress-free.'
        />
        <div className="grid grid-cols-3 my-4 lg:my-10"></div>

    </CustomDiv>
}

export default whyChooseOurBrand
