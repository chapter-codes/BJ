// hooks
import {useLoading} from '@/context/loadingContext'

// components
import CustomDiv from '@/components/common/customDiv'
import {hero} from '@/assets/images'
import ButtonWithIcon from '@/components/common/buttonWithIcon'

const HeroSection = ()=>{
    const {loading, setLoadingState} = useLoading()
    
    return <div id='hero' className="relative flex items-center justify-center text-white w-full h-[400px] sm:h-[600px] lg:h-[calc(100svh-var(--header-height))] max-h-[1000px] bg-cover bg-center bg-no-repeat ">

        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img src={hero} 
                alt="" 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${!loading?'scale-100 opacity-100':'scale-[3] opacity-30'}`}
                onLoad={()=>setLoadingState(false)}
            />
            <div className="hero-modal shrink-0 absolute inset-0 bg-top bg-[linear-gradient(to_bottom,#142A1640,#142A1680_87%)]"></div>
        </div>

        <CustomDiv className='relative flex flex-col justify-center items-center gap-2 mb-0! overflow-hidden'>
            <h1 
                className={`text-2xl lg:text-[2.5rem] text-center lg:text-center font-semibold max-w-[300px] md:max-w-[400px] lg:max-w-[700px] transition-all duration-[1000ms] delay-500 relative ${!loading?'translate-y-0': '-translate-y-full'}`}>
                    Expert CAC & International Company Registration Services
            </h1>
            <p className={` text-sm sm:text-base text-center md:max-w-[700px]  max-w-[300px] mt-0.5 relative transition-opacity duration-[1200ms] delay-700 ${!loading?'opacity-100': 'opacity-0'} `}>Register your business in Nigeria, the US, or the UK with ease — build legal confidence, protect your brand, and access growth opportunities with BeeJayTech.</p>
            <div className={`relative delay-1000 duration-1000 transition-transform ${!loading? 'translate-y-0': 'translate-y-[300px]'} `}>
                <ButtonWithIcon className={`max-w-fit mt-6`} animate={true}/>
            </div>
        </CustomDiv>
        
    </div>
}
export default HeroSection