import Link from "next/link"
export default function Header(){
    return(
        <>
        <div className="lg:hidden flex flex-col justify-center w-full">
            <div className="flex flex-row justify-between items-center">
                <img className="w-30 h-[30px]" src="/nihonFalcomLogo.svg" alt="Nihon Falcom" />
            </div>
            <div className="flex flex-row background-color justify-center space-x-8 
               hover:text-cyan-500 cursor-pointer text-center items-center" style={{backgroundColor:'#ff9613'}}>
                <Link href={`/HomePage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    HomePage
                </div>
                </Link>
                <Link href={`/AboutUsPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    About Us
                </div>
                </Link>
                <Link href={`/ProductsPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Products / Services
                </div>
                </Link>
                <Link href={`/AboutUsPage/Team`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Teams
                </div>
                </Link>
                <Link href={`/BlogListPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Blog List
                </div>
                </Link>
                 <Link href={`/LoginPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Login
                </div>
                </Link>
            </div>
        </div>

        <div className="hidden lg:flex w-full flex-row " style={{backgroundColor:'#ff9613'}}>
            <div className="w-1/3"><img className="w-50 h-[50px]" src="/nihonFalcomLogo.svg" alt="Nihon Falcom" /></div>
            <div className="w-1/3 flex flex-row items-center justify-center space-x-3 ">
                <Link href={`/HomePage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    HomePage
                </div>
                </Link>
                <Link href={`/AboutUsPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    About Us
                </div>
                </Link>
                <Link href={`/ProductsPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Products / Services 
                </div>
                </Link>
                <Link href={`/AboutUsPage/Team`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Teams
                </div>
                </Link>
                <Link href={`/BlogListPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Blog List
                </div>
                </Link>
                <Link href={`/LoginPage`}>
                <div className="p-1.5 hover:text-cyan-500 cursor-pointer">
                    Login
                </div>
                </Link>
            </div>
        </div>

        </>
        
    )
}


