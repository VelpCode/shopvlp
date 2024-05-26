import Link from "next/link";

export function Navbar() {

    return (

        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link href = "/">
                    <h1>ShopVlp</h1>
                </Link>
                <a href = ""></a>
            </div>
        </nav>

    )

}

export default Navbar;