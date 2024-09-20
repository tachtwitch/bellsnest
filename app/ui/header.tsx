import NavLinks from "./links"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Header = () => {
    return(
        <div className=" w-screen flex flex-row h-16 justify-between px-2 items-center">
            <span className="h-8 w-8 text-black-500 font-500 md:hidden"><Bars3Icon/></span>
            <p className="font-mono text-3xl font-black -tracking-[6px]">bellsNest</p>
            <NavLinks/>
            <span className="h-8 w-8 text-black-500 font-500 md:hidden"><MagnifyingGlassIcon/></span>
        </div>
    )
}

export default Header