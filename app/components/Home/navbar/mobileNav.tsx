import { NavLinks } from "@/app/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props  ={
    showNav: boolean;
    closeNav: () => void;
}
export default function MobileNavbar({showNav, closeNav}: Props) {

    const openNav = showNav ? "translate-x-0" : "translate-x-[100%]";

    return(
        <div className={`fixed inset-0 ${openNav} transform transition-all duration-500 z-100002 bg-black opacity-80 w-full h-screen`}>
            <div className={`text-white ${openNav} fixed justify-center flex flex-col h-full transform transition-all duruation-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-900 space-y-6 z-100050 right-0`}>
                {NavLinks.map((link) => {
                    return <Link key={link.id} href={link.url}>
                        <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.label}</p>
                    </Link>
                })}
                <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6" />
            </div>
            
        </div>
    ); 
}