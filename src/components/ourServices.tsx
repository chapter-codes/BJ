
// components
import SectionDescription from "@/components/common/sectionDescription"
import CustomDiv from "@/components/common/customDiv"
import ServicesCard from "./servicesCard";

// assets
import {register, success, church, businessName, calendar, training, upgrade, world, } from '@/assets/images'



type OurServicesProps ={
    className? : string;
}
const services = [
  {
    "serviceType": "Business Name Registration",
    "shortDescription": "Register your business name with CAC quickly and efficiently",
    icon:   <img src={businessName} className="" />
  },
  {
    "serviceType": "Company Registration",
    "shortDescription": "Complete company incorporation services with all required documentation",
    icon:  <img src={register} className="" />
  },
  {
    "serviceType": `NGO/Church/<br>Mosque Registration`,
    "shortDescription": "Specialized registration services for non-profit organizations",
    icon:    <img src={church} className="" />
  },
  {
    "serviceType": "Upgrade to Company",
    "shortDescription": "Convert your business name to a limited liability company",
    icon:    <img src={upgrade} className="" />
  },
  {
    "serviceType": "Annual Returns Filing",
    "shortDescription": "Stay compliant with annual CAC filing requirements",
    icon:   <img src={calendar} className="" />
  },
  {
    "serviceType": "US & UK Company Registration",
    "shortDescription": "International business registration services",
    icon:    <img src={world} className="" />
  },
  {
    "serviceType": "Post-Incorporation Services",
    "shortDescription": "Complete support after your business registration",
    icon:    <img src={success} className="" />
  },
  {
    "serviceType": "CAC Registration Training",
    "shortDescription": "Learn the registration process with our expert training",
    icon:  <img src={training} className="" /> 
  }
]



const OurServices = ({className}:OurServicesProps)=>{
  // const [opacity, setOpacity] = useState(0.2)
  // const motionProps = {
  //   initial :{opacity:0.3},
  //   animate:{opacity},
  //   transition:{duration:0.5},
  // }


    return <CustomDiv 
      id="services" 
      className={`mb-4 ${className} `}
      // motionProps={motionProps}
      >
        <SectionDescription 
            section="our services"
            description="We offer comprehensive business registration solutions"
        />
          
        {/* services */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 sm:gap-5 mt-4">
            {services.map(service=> <ServicesCard key={service.serviceType} service={service} />)}
        </div>
    </CustomDiv>
}
export default OurServices

