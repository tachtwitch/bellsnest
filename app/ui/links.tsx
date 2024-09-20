import Link from "next/link"

export const NavLinks = () => {
    const links = ["home","learn"]
    return(
        <nav className="hidden md:flex flex-row gap-4 ">
            {links.map((link,index) => <li key={index}><Link className="text-base font-mono hover:underline" href={link}>{link}</Link></li>)}
        </nav>

    )
}
export default NavLinks