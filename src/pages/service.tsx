import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { AnimatePresence, motion } from "motion/react"


import {  pageLogoDarkText } from "@/assets/images"
import { servicesWithPrice } from "@/lib/data"
import { Button } from "@/components/ui/button"

import CustomDiv from "@/components/common/customDiv"
import Backbutton from "@/components/service/backbutton"
import ChooseService from "@/components/service/chooseService"
import ServiceFormCard from "@/components/service/serviceFormCard"
import Footer from "@/components/footer"

import type {ServiceWithPrice} from '@/components/service/types'
import PriceSummary from "@/components/service/priceSummary"
import NeedHelp from "@/components/service/needHelp"
import BusinessInformation from "@/components/service/businessInformation"
import PersonalInformation from "@/components/service/personalInformation"
import Review from "@/components/service/review"
import { useFormContext } from "@/context/FormContext"
import { stepFieldsCompleted } from "@/lib/service"

type ServiceProps ={
  fullServiceList:boolean
}

function Service( {fullServiceList}:ServiceProps) {
  const [step, setStep] = useState(0)
  const [enableNextClick, setEnableNextClick] = useState(false)

  const {service :servicePath} = useParams()
  const {state} = useFormContext()

  const foundService = servicesWithPrice.find(service=>service.link === servicePath) as ServiceWithPrice

  useEffect(()=>{
    window.scrollTo(0,0)
    if(servicePath){
      setStep(prev=> prev == 0? 1 : prev)
    }
  }, [step])

  useEffect(()=>{
    console.log(state)
    const next = stepFieldsCompleted(step, state)
    console.log('nex', next)
    setEnableNextClick(next)
  }, [step, state])  

  const handleNext = ()=>{
        setStep((prev)=> Math.min(prev + 1, 4))
  }
  const handlePrevious = ()=>{
      setStep((prev)=> Math.max(prev - 1,  1))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{y:servicePath ? 0:'100%'}}
        animate={{ y:0 }}
        transition={{ duration:0.5, }}
        exit={{y:'100%', opacity:0.4}}
        className = {``}
        id="service"
      >
        <div className=" bg-tertiary-background w-full">
          <div  id='sticky-header' className="sticky z-[3000] top-0 pt-4 bg-tertiary-background ">
            <CustomDiv className="mb-0! pb-10">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-foreground text-xl font-semibold ">Get Started</h2>
                  <img src={pageLogoDarkText} alt="Beejaytech Logo." />
                </div>
                <p className="text-base text-secondary-foreground my-4">Step {step} of 4</p>
                {/* progress bar */}
                <div className="step w-full h-2.5 mt-2 bg-progress-bar-background rounded overflow-hidden">
                  <div 
                    className={`bg-background h-full rounded transition-[width] duration-300  
                      ${
                        step == 0? 'w-0':
                        step==1? 'w-1/4' :
                        step==2? 'w-2/4' :
                        step==3? 'w-3/4' : 
                        'w-full'
                      }
                      `}
                  >
                  </div>
                </div>
                <Backbutton />
              </CustomDiv>
          </div>
            
          <CustomDiv className="mb-0! pb-20">
            <div  className="flex flex-col md:flex-row  md:justify-evenly gap-6" >
              <ServiceFormCard >
                {step == 0 && 
                  <ChooseService  
                    services = {fullServiceList? servicesWithPrice :[foundService] } 
                    step={step} 
                    setStep={setStep} 
                  />
                }
                {step == 1 &&
                  <ChooseService  
                    services = {fullServiceList? servicesWithPrice :[foundService] } 
                    step={step} 
                    setStep={setStep} 
                  />
                }
                {step == 2 &&
                  <BusinessInformation  />
                }
                {step == 3 &&
                  <PersonalInformation />
                }
                {step == 4 &&
                  <Review />
                }

                 {!fullServiceList && 
                    <div className="flex justify-between w-full mt-12">
                        <Button 
                            className={`w-32 md:w-52 border ${ step > 1 ? '': ' bg-disabled-btn border-disabled-btn-border'}`}
                            disabled={step == 1}
                            onClick={handlePrevious}
                            >
                                Previous
                        </Button>
                        <Button 
                            className={`text-white min-w-32 md:w-50 ${ enableNextClick ? 'bg-background': ' bg-disabled-previous-btn'}`}
                            disabled={!enableNextClick}
                            onClick={handleNext}
                            >
                                Next
                        </Button>
                    </div>
                  }
              </ServiceFormCard>
              <div className="md:self-start flex flex-col gap-4">
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

