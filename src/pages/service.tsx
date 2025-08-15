import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { AnimatePresence, motion } from "motion/react"


import { backArrow, pageLogoDarkText } from "@/assets/images"
import { servicesWithPrice } from "@/lib/data"

import CustomDiv from "@/components/common/customDiv"
import ChooseService from "@/components/service/chooseService"
import Footer from "@/components/footer"

import type {ServiceWithPrice} from '@/components/service/types'
import PriceSummary from "@/components/service/priceSummary"
import NeedHelp from "@/components/service/needHelp"

type ServiceProps ={
  fullServiceList:boolean
}

function Service( {fullServiceList}:ServiceProps) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const {service :servicePath} = useParams()
  console.log(servicePath)

  const foundService = servicesWithPrice.find(service=>service.link === servicePath) as ServiceWithPrice
  // {
  //   title: "NGO/Church/Mosque Registration",
  //   description: "Specialized registration services for non-profit organizations",
  //   price: 30000,
  //   link:'222'
  // }

  const handleClick = ()=>{
    navigate(-1)
    // setTimeout(()=>document.body.style.overflow = 'auto', 0)
  }


  return (
    <AnimatePresence>
      <motion.div
        initial={{y:'100%'}}
        animate={{ y:0 }}
        transition={{ duration:0.5, }}
        exit={{y:'100%', opacity:0.4}}
        className = {``}
      >
        <div className=" bg-tertiary-background">
          <CustomDiv className="mb-0! pb-20">
            <div id='sticky-header' className="sticky z-[4000] top-0 py-4 bg-tertiary-background pb-10">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-foreground text-xl font-semibold ">Get Started</h2>
                <img src={pageLogoDarkText} alt="Beejaytech Logo." />
              </div>


              <p className="text-base text-secondary-foreground my-4">Step {step} of 4</p>
              <div className="step w-full h-2.5 mt-2 bg-progress-bar-background rounded overflow-hidden">
                {/* pro
                gress bar */}
                <div className={`bg-background h-full rounded transition-[width] duration-300  ${
                  step==1? 'w-1/4' :
                  step==2? 'w-2/4' :
                  step==3? 'w-3/4' : 
                  'w-full'
                }`}>
                </div>
              </div>

              <button 
                className="flex gap-1 items-center text-background bg-tertiary-background w-full mt-4" 
                onClick={()=>handleClick()}
                >
                <img src={backArrow} alt="back button" className="w-5"/>
                Back to Home
              </button>    
            </div>

            <div className="flex flex-col md:flex-row items-start md:justify-evenly gap-6">
              <ChooseService  
                services = {fullServiceList? servicesWithPrice :[foundService] } 
                step={step} 
                setStep={setStep} 
              />
              <div className="flex flex-col gap-4">
                {!fullServiceList && <PriceSummary price={foundService.price} />}
                <NeedHelp />
              </div>

            </div>
          </CustomDiv>
        <Footer />
        </div>
      </motion.div>
    </AnimatePresence>

  )
}

export default Service
