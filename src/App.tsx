import Navbar from '@/components/navbar'
import HeroSection from '@/components/heroSection';
import OurServices from '@/components/ourServices';

const App = ()=>{
  return <div className="">
    <Navbar />
    <HeroSection />
    <div className="w-full bg-tertiary-background pt-10 lg:py-20">
      <OurServices className='' />

    </div>
  </div>
}

export default App;