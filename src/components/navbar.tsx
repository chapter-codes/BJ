import { pageLogo } from "@/assets/images"
import ButtonWithIcon from '@/components/common/buttonWithIcon'


const Navbar = ()=>{
    const links =['about', 'service', 'FAQ', 'contact']

    return <header className="h-header text-white flex items-center bg-background w-full sticky top-0 z-10 ">
        <div className="flex justify-between items-center gap-4 w-[95%] lg:w-4/5 max-w-[1440px] mx-auto ">
            {/* logo */}
            <img src={pageLogo} alt="beejaytech logo." className="w-20" />
            {/* nav */}
            <nav className="hidden md:flex justify-center gap-2">
                <ul className="flex justify-center gap-4">
                    { links.map(link=> 
                        <li className="capitalize hover:text-hover transition-[color] duration-300" key={link}> 
                            <a href={`#${link}`}>{link}</a> 
                        </li>
                    )}
                </ul>
            </nav>
            {/*  */}
            <ButtonWithIcon  />
        </div>
    </header>
}

export default Navbar