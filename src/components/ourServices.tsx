
// components
import SectionDescription from "@/components/common/sectionDescription"
import CustomDiv from "@/components/common/customDiv"
import ButtonWithIcon from "@/components/common/buttonWithIcon";
import ServicesCard from "./servicesCard";
import Reviews from "@/components/reviews";
import {motion, useInView} from 'motion/react'

// assets
import {register, success, church, businessName, calendar, training, upgrade, world, business, clippedBrandIcon} from '@/assets/images'
import { useEffect, useRef, useState } from "react";



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
  const [opacity, setOpacity] = useState(0.2)
  const servicesRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(servicesRef, {amount:0.6})
  const motionProps = {
    initial :{opacity:0.3},
    animate:{opacity},
    transition:{duration:0.5},
  }


  useEffect(()=>{
    const handleScroll =()=>{
        // handle opacity change for mobile and dessktop
        if(window.innerWidth >= 1040){
          window.scrollY >= 400? setOpacity(1) : setOpacity(0.3)
        }else{
          window.scrollY >= 100? setOpacity(1) : setOpacity(0.3)
        }
    }
      
    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  
  },[])



    return <CustomDiv 
      id="services" 
      className={` ${className} `}
      motionProps={motionProps}
      >
        <SectionDescription 
            section="our services"
            description="We offer comprehensive business registration solutions"
            motionProps={{
              
            }}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 sm:gap-5 mt-4">
            {services.map(service=> <ServicesCard key={service.serviceType} service={service} />)}
        </div>
        <div className="flex justify-center">
            <ButtonWithIcon className=" my-5 my- lg:my-12 bg-background text-white hover:text-white! hover:bg-background! align-center" />
        </div>
        <div 
          className="relative overflow-hidden w-full max-w-[1140px] mx-auto max-h-[655px] rounded-xl border-12 border-white"          
          >
          <img src={clippedBrandIcon} alt=""  className="absolute z-10 top-0 left-0 rounded-tl-xl w-10  lg:w-auto" />
          <motion.img
              whileInView={{scale:1.2}}
              transition={{duration:0.5}}
              viewport={{amount:0.6}}
              src={business} 
              alt='three people sitted at a table, with teacups, discussing while looking at a laptop.'  
              className="w-full mx-auto rounded-xl overflow-hidden   transition-transform duration-300"
          />
          <motion.div 
            className="hero-modal shrink-0 absolute top-0 left-0 w-full h-full bg-top bg-[linear-gradient(to_bottom,#00000000,#12241380_87%)] rounded-xl overflow-hidden"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.3}}
            viewport={{amount:0.6}}
            ref={servicesRef}
            />
            <CustomDiv
              plainDiv={true} 
              className="absolute z-30 right-2 bottom-4 w-full flex justify-center md:justify-end "
              motionProps={{
                initial:{x:'100%'},
                whileInView:{x: isInView? 0 : '100%'},
                transition:{ duration:0.99}
              }}
            >
              <Reviews />
            </CustomDiv>
        </div>   
    </CustomDiv>
}
export default OurServices

