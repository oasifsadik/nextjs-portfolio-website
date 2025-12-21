"use client"
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import { useState } from "react";

export default function responsiveNav() {
    const [showNav, setShowNav] = useState(false);
    
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
    return <div>
        <Navbar openNav={openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
}