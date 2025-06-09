import Link from "next/link"
export default function AboutUsContents(){
    return(
        <>
        {/* CH Header*/}
        <div className="w-full h-full p-[50px] flex flex-col justify-center items-center">
        <div><img className="w-[342.84px] h-20" src="nihonfalcomLogo.svg" alt="Falcom Logo" /></div>
        <div className="text-center mt-10 space-y-5">
        <p>夢はいつも、ここから始まる。</p>
        <p>いつも、この場所で、ひとりひとりの夢がたくさんの大きな夢へと育まれてきました。<br /> 時代や場所を超えて人に語りかけてくるもの、夢。</p>
        <p>Nihon Falcom Corporation.</p>
        </div>
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 mt-10 lg:mt-20 px-4">
  
        <Link href="/contents/aboutUsContents/companyHistory" className="relative w-full block">
            <img src="/companyhistory.webp" alt="Company History" className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-pink-300 bg-opacity-80 flex items-center justify-center py-2">
            <p className="text-white font-semibold">COMPANY HISTORY</p>
            </div>
        </Link>

        <Link href="/contents/aboutUsContents/culture" className="relative w-full block">
            <img src="/culture.webp" alt="Culture" className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-yellow-300 bg-opacity-80 flex items-center justify-center py-2">
            <p className="text-white font-semibold">CULTURE</p>
            </div>
        </Link>

        <Link href="/contents/aboutUsContents/team" className="hidden relative w-full lg:block">
            <img src="/team.webp" alt="Culture" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-green-300 bg-opacity-80 flex items-center justify-center py-2">
            <p className="text-white font-semibold">TEAM</p>
            </div>
        </Link>


        </div>
        <div className="lg:hidden flex flex-row justify-center items-center gap-4 mt-10 px-4">
        <Link href="/contents/aboutUsContents/team" className="relative w-full block">
            <img src="/team.webp" alt="Team" className="w-[228px] h-[161.27px] object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-pink-300 bg-opacity-80 flex items-center justify-center py-2">
            <p className="text-white font-semibold">TEAM</p>
            </div>
        </Link>

        </div>


        </div>
        
        </>
    )
}


/*
<div className="flex flex-wrap lg:flex-row mt-10 lg:mt-20 justify-center items-center">
        <Link href="/contents/aboutUsContents/companyHistory">
        <div className="w-full relative"><img className="w-1/2 p-2" src="/companyhistory.webp" alt="Company History" />
        <div className="absolute bottom-0 left-0 w-1/2 bg-pink-300 flex items-center justify-center text-center ">
        <p>COMPANY HISTORY</p>
        </div>
        </div>
        </Link>
        <Link href="/contents/aboutUsContents/companyHistory">
        <div className="w-full relative"><img className="w-1/2 p-2" src="/companyhistory.webp" alt="Company History" />
        <div className="absolute bottom-0 left-0 w-1/2 bg-pink-300 flex items-center justify-center text-center">
        <p>CULTURE</p>
        </div>
        </div>
        </Link>
        <Link href="/contents/aboutUsContents/companyHistory">
        <div className="w-full relative"><img className="w-1/2 p-2" src="/companyhistory.webp" alt="Company History" />
        <div className="absolute bottom-0 left-0 w-1/2 bg-pink-300 flex items-center justify-center text-center">
        <p>TEAM</p>
        </div>
        </div>
        </Link>
        </div>*/