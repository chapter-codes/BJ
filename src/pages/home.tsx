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


import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Outlet, useLocation } from 'react-router';




function Home() {
    const {loading} = useLoading()
    const {pathname} = useLocation()
    const modalRef = useRef<HTMLDivElement | null>(null)

    console.log(pathname)
    const isServicesPath =  pathname === "/services";
    const isServicePath =  /^\/services\/[^/]+$/.test(pathname)
    console.log(isServicesPath, isServicePath)

    useEffect(()=>{
        if(loading){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflow = 'auto'
        }
    }, [loading])

    useEffect(()=>{
        modalRef.current?.scrollTo(0,0)

    },[isServicePath])
    
    return (
        <>
        {loading && <Loading/>}
        <AnimatePresence>
            <motion.div
                // initial={{y:'-100%'}}
                animate={{y:0}}
                // transition={{duration: loading? 0 : 0.3, ease: 'easeOut'}}
                // exit={{y:}}
                className=''
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

                    {/* /services  modal*/}
                    <motion.div
                        className={`fixed top-0 left-0 w-screen h-dvh
                            ${isServicesPath
                                ? 'pointer-events-auto z-[3000]'
                                :'pointer-events-none z-[2000]'
                            }
                            overflow-auto
                        `}
                        data-lenis-prevent
                        ref={modalRef}
                        >
                            <Outlet/>
                    </motion.div>

                    {/*services/:service modal  */}
                    {isServicePath && <motion.div
                            className={`fixed top-0 left-0 w-screen h-dvh
                                ${isServicePath
                                    ? 'pointer-events-auto z-[3000]'
                                    :'pointer-events-none z-[2000]'
                                }
                                overflow-auto ''
                            `}
                            data-lenis-prevent
                            >
                                <Outlet/>

                        </motion.div>
                    }
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Home
