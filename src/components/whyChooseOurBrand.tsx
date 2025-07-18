
// components
import CustomDiv from '@/components/common/customDiv'
import SectionDescription from '@/components/common/sectionDescription'
import ServicesCard from '@/components/servicesCard'

// images
import {good, fast, dollar, user} from '@/assets/images'

const reasons=[
  {
    "title": "Fast & Reliable",
    "shortDescription": "Quick turnaround times with guaranteed results",
    "icon": <img src={fast} className="" /> 
  },
  {
    "title": "Experienced Professionals",
    "shortDescription": "Expert team with years of CAC experience",
    "icon": <img src={user} className="" /> 
  },
  {
    "title": "Seamless Process",
    "shortDescription": "End-to-end support from start to finish",
    "icon": <img src={good} className="" /> 
  },
  {
    "title": "Affordable Pricing",
    "shortDescription": "Competitive rates with transparent pricing",
    "icon": <img src={dollar} className="" /> 
  }
]

function whyChooseOurBrand() {
  return <CustomDiv id='about' className='mt-10 lg:mt-32 mb-10 lg:mb-20'>
        <SectionDescription 
            section='why choose our brand?'
            description='At BeeJayTech, we guide you through every step of CAC registration, making the process fast, simple, and stress-free.'
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
            {reasons.map(reason=> <ServicesCard key={reason.title} service={{...reason, serviceType:reason.title}} />)}
        </div>
    </CustomDiv>
}

export default whyChooseOurBrand
