import {useLoading} from '@/context/loadingContext'
import Header from '@/components/header'
import HeroSection from '@/components/heroSection';
import OurServices from '@/components/ourServices';
import WhyChooseOurBrand from '@/components/whyChooseOurBrand'
import FAQs from '@/components/FAQs';
import WhatOurClientsSay from '@/components/whatOurClientsSay';
import ReadyToRegister from '@/components/readyToRegister';
import Footer from '@/components/footer';
import Loading from '@/components/loading';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

function Home() {
    const {loading} = useLoading()

    useEffect(()=>{
        if(loading){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflow = 'auto'
        }
    }, [loading])
    
    return (
        <>
        {loading && <Loading/>}
        <AnimatePresence>
            <motion.div
                // initial={{y:'-100%'}}
                // animate={{y:0}}
                // transition={{duration: loading? 0 : 0.3, ease: 'easeOut'}}
                // exit={{y:}}
                >
                    <Header />
                    <HeroSection />
                    <div className="w-full bg-tertiary-background py-10 lg:py-10">
                        <WhyChooseOurBrand />
                        <OurServices className='' />
                        <FAQs />
                        <WhatOurClientsSay />
                    </div>
                    <ReadyToRegister />
                    <Footer />
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Home
