
// components
import SectionDescription from "@/components/common/sectionDescription"
import CustomDiv from "@/components/common/customDiv"
import ButtonWithIcon from "@/components/common/buttonWithIcon";
import ServicesCard from "./servicesCard";

// assets
import {register, success, church, businessName, calendar, training, upgrade, world, business, clippedBrandIcon} from '@/assets/images'



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
    "serviceType": "NGO/Church/Mosque Registration",
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
    return <CustomDiv className={` ${className}`}>
        <SectionDescription 
            section="our services"
            description="We offer comprehensive business registration solutions"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
            {services.map(service=> <ServicesCard key={service.serviceType} service={service} />)}
        </div>
        <div className="flex justify-center">
            <ButtonWithIcon className=" my-5 lg:my-10 bg-background text-white align-center" />
        </div>
        <div className="relative overflow-hidden w-full max-w-[1140px] mx-auto max-h-[655px] rounded-xl border-12 border-white">
          <img src={clippedBrandIcon} alt=""  className="absolute top-0 left-0 rounded-tl-xl" />
          <img 
            src={business} 
            alt='three people sitted at a table, with teacups, discussing while looking at a laptop.'  
            className="w-full mx-auto rounded-xl overflow-hidden  group-hover:scale-105 transition-transform duration-300"
          />
          <div className="hero-modal shrink-0 absolute top-0 left-0 w-full h-full bg-top bg-[linear-gradient(to_bottom,#00000000,#12241380_87%)] rounded-xl overflow-hidden"></div>
        </div>   
    </CustomDiv>
}
export default OurServices
