export default function Footer(){
    const menuLabels = ["HomePage","About Us","Products / Services", "Teams","Blog List", "Create Blog"];
    
    return(
        <>
        <div className="flex justify-center bg-black py-3 w-full">
        {menuLabels.map((key,index)=>(
            <div key={index} className="flex flex-col items-center text-gray-400 w-full text-xs lg:text-2xl hover:text-cyan-400 cursor-pointer">
                <p>{key}</p>
            </div>
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