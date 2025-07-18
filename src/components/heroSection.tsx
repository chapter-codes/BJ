import CustomDiv from '@/components/common/customDiv'
import {hero} from '@/assets/images'
import ButtonWithIcon from '@/components/common/buttonWithIcon'


const HeroSection = ()=>{


    return <div className="relative flex items-center justify-center text-white w-full h-[400px] lg:h-[calc(100svh-var(--header-height))] max-h-[1000px] bg-cover bg-center bg-no-repeat " style={{backgroundImage:`url(${hero})`}}>
        <div className="hero-modal shrink-0 absolute top-0 left-0 w-full h-full bg-top bg-[linear-gradient(to_bottom,#142A1640,#142A1680_87%)]"></div>

        <CustomDiv className='relative flex flex-col justify-center items-center gap- mb-0!'>
            <h1 className="text-2xl lg:text-[2.5rem] text-center lg:text-center font-semibold max-w-[300px] md:max-w-[400px] lg:max-w-[700px]">Expert CAC & International Company Registration Services</h1>
            <p className="text-sm sm:text-base text-center md:max-w-[700px]  max-w-[300px] mt-0.5">Register your business in Nigeria, the US, or the UK with ease — build legal confidence, protect your brand, and access growth opportunities with BeeJayTech.</p>
            <ButtonWithIcon className='max-w-fit mt-6' />
        </CustomDiv>
    </div>
}
export default HeroSection