// hooks
import {useEffect, useState, useRef} from 'react'
import {motion, useInView} from 'motion/react'




// components
import CustomDiv from '@/components/common/customDiv'
import SectionDescription from '@/components/common/sectionDescription'
import ServicesCard from '@/components/servicesCard'
import Reviews from "@/components/reviews";



// images 
import {good, fast, dollar, user, clippedBrandIcon, business} from '@/assets/images'


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
  const [opacity, setOpacity] = useState(0.2)  
  const reviewsSectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(reviewsSectionRef, {amount:0.6})

  
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
            window.scrollY >= 150? setOpacity(1) : setOpacity(0.3)
          }
      }
        
      window.addEventListener('scroll', handleScroll)
      return ()=> window.removeEventListener('scroll', handleScroll)
    
    },[])
  return <CustomDiv 
        id='about' 
        className='mt-10 lg:mt-10 mb-10 lg:mb-20'
        motionProps={motionProps}
        >
        <SectionDescription 
            section='why choose our brand?'
            description='At BeeJayTech, we guide you through every step of CAC registration, making the process fast, simple, and stress-free.'
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 sm:gap-5 py-10">
            {reasons.map(reason=> <ServicesCard key={reason.title} service={{...reason, serviceType:reason.title, showButton:false}} />)}
        </div>
        <div 
          className="relative overflow-hidden w-full max-w-[1140px] mx-auto max-h-[655px] rounded-xl border-12 border-white my-5 md:my-8 lg:my-12"          
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
            ref={reviewsSectionRef}
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

export default whyChooseOurBrand
