import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection';
import OurServices from '@/components/ourServices';
import WhyChooseOurBrand from '@/components/whyChooseOurBrand'
import FAQs from '@/components/FAQs';

const App = ()=>{
  return <div className="">
    <Navbar />
    <HeroSection />
    <div className="w-full bg-tertiary-background pt-10 lg:py-20">
      <OurServices className='' />
      <WhyChooseOurBrand />
      <FAQs />
      

    </div>
  </div>
}

export default App;