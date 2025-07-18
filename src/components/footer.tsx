import CustomDiv from "./common/customDiv"
import {pageLogo} from '@/assets/images'
import { Phone, Mail } from "lucide-react"
import { instagram, facebook } from "@/assets/images"
 

function Footer() {
  return (
    <div className='bg-footer-background text-footer-foreground w-full py-12 lg:py-24'>
      <CustomDiv className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center lg:items-start">
            <div className="shrink-0 lg:basis-[40%] flex lg:flex-col justify-between items-center lg:items-start gap-12 lg:gap-0 w h-[110px]">
                <img src={pageLogo} alt="beejaytech logo" className="w-23" />
                    <ul className="flex gap-2 items-center">
                        <li className="">
                            <a href="https://www.instagram.com/the.beejaytech.brand/profilecard/?igsh=MWNsbGJ5OGUyd2R0cA==" target="_blank">
                            <img src={instagram} alt="instagram  link of beejaytech." className="w-6"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="https://www.facebook.com/share/1SjAVMJw6c/" target="_blank">
                            <img src={facebook} alt="facebook page link of beejaytech." className="w-6"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="http://tiktok.com/@bridget_jumbo" target="_blank">
                            <img src="https://api.iconify.design/hugeicons/tiktok.svg?color=%23C39A2D" className="w-6" alt="tiktok page link of beejaytech." />
                            </a>
                        </li>
                    </ul>
            </div>
            <div id="contact" className="lg:basis-[30%] flex flex-col items-center lg:items-start gap-1">
                <h2 className="mb-4 text-white text-base md:text-xl font-semibold">Contact</h2>
                <ul className="flex flex-col gap-3">
                    <li className="flex hover:text-secondary-background transition-[color] duration-300"><Phone color="#C39A2D"/> <a href="tel:+2349059414563">+234 905 941 4563</a> </li>
                    <li className="flex hover:text-secondary-background transition-[color] duration-300"><Mail color="#C39A2D"/> <a href="tel:+2349059414563">+234 905 941 4563</a> </li>
                </ul>
            </div>
            <div className="lg:basis-[30%] flex flex-col gap-1">
                <h2 className="mb-4 text-white text-base md:text-xl font-semibold">Quick Links</h2>
                <ul className="flex flex-col text-center lg:text-left gap-1">
                    <li className="hover:text-secondary-background transition-[color] duration-300"> <a href="#about">About Us</a> </li>
                    <li className="hover:text-secondary-background transition-[color] duration-300"> <a href="#services">Services</a> </li>
                    <li className="hover:text-secondary-background transition-[color] duration-300"> <a href="#faqs">FAQS</a> </li>
                    <li className="hover:text-secondary-background transition-[color] duration-300"> <a href="#contact">Contact</a> </li>
                </ul>
            </div>
      </CustomDiv>
      <div className='w-full h-[1px] bg-footer-divider-background  mt-10 lg:mt-32'></div>
      <p className="text-sm md:text-base text-center w-full max-w-[200px] md:max-w-full mx-auto mt-4">© 2025 BeeJayTech Brand. All rights reserved.</p>
    </div>
  )
}

export default Footer
