export default function Header(){
    return(
        <>
        <div className="lg:hidden flex flex-col justify-center w-full">
            <div className="flex flex-row justify-between items-center">
                <img className="w-30 h-[30px]" src="/nihonFalcomLogo.svg" alt="Nihon Falcom" />
                <h1 className="mr-5">LOGIN</h1>
            </div>
            <div className="flex flex-row background-color justify-center space-x-8 text-center items-center" style={{backgroundColor:'#ff9613'}}>
                <div className="p-1.5">
                    HomePage
                </div>
                <div className="p-1.5">
                    About Us
                </div>
                <div className="p-1.5">
                    Products / Services
                </div>
                <div className="p-1.5">
                    Teams
                </div>
                <div className="p-1.5">
                    Blog List
                </div>
                <div className="p-1.5">
                    Create Blog
                </div>
            </div>
        </div>

        <div className="hidden lg:flex w-full flex-row " style={{backgroundColor:'#ff9613'}}>
            <div className="w-1/3"><img className="w-50 h-[50px]" src="/nihonFalcomLogo.svg" alt="Nihon Falcom" /></div>
            <div className="w-1/3 flex flex-row items-center justify-center space-x-3">
                <div className="p-1.5">
                    HomePage
                </div>
                <div className="p-1.5">
                    About Us
                </div>
                <div className="p-1.5">
                    Products / Services 
                </div>
                <div className="p-1.5">
                    Teams
                </div>
                <div className="p-1.5">
                    Blog List
                </div>
                <div className="p-1.5">
                    Create Blog
                </div>
            </div>
            <div className="w-1/3 flex justify-end items-center mr-5"><h1>LOGIN</h1></div>
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
        </div>*/