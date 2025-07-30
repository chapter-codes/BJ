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
        </>
    )
}

export default Home
