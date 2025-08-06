import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { services } from "@/lib/data"
import { backArrow } from "@/assets/images"
import CustomDiv from "@/components/common/customDiv"
import ChooseService from "@/components/chooseService"
import Footer from "@/components/footer"
import { AnimatePresence, motion } from "motion/react"


type Service ={
  fullServiceList:boolean
}
function Service( {fullServiceList}:Service) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const {service} = useParams()
  const foundService = {
    title: "NGO/Church/Mosque Registration",
    description: "Specialized registration services for non-profit organizations",
    price: 30000
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{y:'100%'}}
        animate={{ y:0 }}
        transition={{ duration:0.3, ease:"easeIn" }}
        exit={{y:'100%', opacity:0.4}}
      >
        <div className="bg-tertiary-background py-10 ">
          <CustomDiv className="">
            <button className="flex gap-1 text-background" onClick={()=>navigate(-1)}>
              <img src={backArrow} alt="back button" />
              Back to Home
            </button>
            
            <h2 className="text-foreground text-xl font-semibold mt-14">Get Started</h2>
            <p className="text-base text-secondary-foreground my-4">Step {step} of 4</p>
            <div className="step w-full h-2.5 mt-2 bg-progress-bar-background rounded overflow-hidden">
              {/* progress bar */}
              <div className={`bg-background h-full rounded transition-[width] duration-300 ${
                step==1? 'w-1/4' :
                step==2? 'w-2/4' :
                step==3? 'w-3/4' : 
                'w-full'
              }`}>
              </div>
            </div>
            
            <div className="md:flex">
              <ChooseService  
                services ={fullServiceList? services :[foundService] } 
                step={step} 
                setStep={setStep} 
              />
              <div className="">

              </div>
            </div>
          </CustomDiv>
        </div>
      <Footer />
      </motion.div>
    </AnimatePresence>

  )
}

export default Service
