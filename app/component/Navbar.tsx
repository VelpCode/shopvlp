import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { Mobilemenu } from "./Mobilemenu";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function Navbar() {

    return (

        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link href = "/">
                    <h1 className="font-bold text-xl">Shop<span className="text-blue-500">Vlp</span></h1>
                </Link>
                <a href = ""></a>
            </div>
            <NavbarLinks />

            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
                
                <Button asChild><LoginLink>Log In</LoginLink></Button>
                <Button variant={"secondary"} asChild><RegisterLink>Sign Up</RegisterLink></Button>

                <div className="md:hidden">
                    <Mobilemenu />
                </div>

            </div>
        </nav>

    )

}

export default Navbar;