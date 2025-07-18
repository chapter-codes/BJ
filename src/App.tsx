import Header from '@/components/header'
import HeroSection from '@/components/heroSection';
import OurServices from '@/components/ourServices';
import WhyChooseOurBrand from '@/components/whyChooseOurBrand'
import FAQs from '@/components/FAQs';
import WhatOurClientsSay from '@/components/whatOurClientsSay';
import ReadyToRegister from '@/components/readyToRegister';
import Footer from '@/components/footer';
const App = ()=>{
  return <div className="">
    <Header />
    <HeroSection />
    <div className="w-full bg-tertiary-background py-10 lg:py-20">
      <OurServices className='' />
      <WhyChooseOurBrand />
      <FAQs />
      <WhatOurClientsSay />
    </div>
    <ReadyToRegister />
    <Footer />
  </div>
}

export default App;