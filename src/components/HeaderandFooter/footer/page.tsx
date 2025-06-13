import Link from "next/link";
export default function Footer(){
    const menuLabels = [
    {label: "HomePage", href: "/HomePage"},
    {label: "About Us", href: "/AboutUsPage"},
    {label:"Products / Services", href: "/ProductsPage"},
    {label: "Teams" , href:"/AboutUsPage/Team"},
    {label:"Blog List",href:"/BlogListPage"},
    {label:"Create Blog",href:"/CreateBlogPage"}
    ];
    
    return(
        <>
        <div className="flex justify-center bg-black py-3 w-full">
        {menuLabels.map((key,index)=>(
            <Link key={index} href={key.href}>
            <div key={index} className="flex flex-col items-center text-gray-400 w-full text-xs lg:text-2xl
             hover:text-cyan-400 cursor-pointer px-5 lg:px-20">
                <p>{key.label}</p>
            </div>
            </Link>
        ))}
        </div>
        </>
        
    )
}


/*
<div className="flex flex-col justify-center w-full">
            <div className="flex flex-row items-start space-x-8" style={{backgroundColor:'#ff9613'}}>
                <div className=""><img className="w-50 h-[50px]" src="/nihonFalcomLogo.svg" alt="Nihon Falcom" /></div>
                <div className="p-1.5">
                    AAAAA
                </div>
                <div className="p-1.5">
                    AAAAA
                </div>
                <div className="p-1.5">
                    AAAAA
                </div>
                <div className="p-1.5">
                    AAAAA
                </div>
                <div className="p-1.5">
                    AAAAA
                </div>
                <div className="p-1.5">
                    AAAAA
                </div>
            </div>
        </div>
        
        
        <div className="flex flex-row background-color justify-center space-x-8 text-center items-center border-2">
            <div className="p-1.5 border min-w-[100px]">
                HomePage
            </div>
            <div className="p-1.5 border min-w-[100px]">
                About Us
            </div>
            <div className="p-1.5 border min-w-[100px]">
                    Products / Services
            </div>
            <div className="p-1.5 border min-w-[100px]">
                    Teams
            </div>
            <div className="p-1.5 border min-w-[100px]">
                Blog List
            </div>
            <div className="p-1.5 border min-w-[100px]">
                Create Blog
            </div>
        </div>
        */