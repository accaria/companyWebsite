import Link from "next/link"
export default function ProductHomePage(){
    return(
        <div className="flex flex-col lg:flex-row w-full p-10">
        <div className="lg:hidden">
        {/*THIS IS FOR ANYTHING BELOW LG RESOLUTION */}
        <div className="text-3xl lg:text-5xl"><h1>Pickup Game Title</h1></div>
        <div className="text-2xl lg:text-3xl"><h1>注目作</h1></div>
        <div className="flex flex-col mt-5">
        <Link href="https://www.falcom.co.jp/sora/">
        <div className=""><img className="" src="/homePageMedia/homepageBanner1.webp" alt="Sora no Kiseki 1ST" />
        <h1 className="text-justify space-x-4">Pre-Orders are open! ご予約受付中
            <span className="bg-red-500">Switch</span>
            <span className="bg-blue-950">PS5</span>
            <span className="bg-gray-900">Steam</span></h1>
        <h1 className="text-2xl font-bold">空の軌跡 the 1st </h1>
        <h1 className="text-end">Check out the dedicated site 公式サイト</h1>
        <h1 className="text-end text-3xl">→</h1>
        </div></Link>
        </div>
        <div className="text-3xl lg:text-5xl"><h1>Most Popular Title of All Time</h1></div>
        <div className="text-2xl lg:text-3xl"><h1>大人気ゲーム</h1></div>
        <div className="flex flex-col mt-5">
        <Link href="https://www.falcom.co.jp/ys8-ys9_ps5">
        <div className=""><img src="/homePageMedia/homepageBanner5.webp" alt="YS IX and X" />
        <h1 className="text-justify space-x-4">Orders are now open! 今すぐご購入を
            <span className="bg-red-500">Switch</span>
            <span className="bg-blue-950">PS5</span>
            <span className="bg-gray-900">Steam</span></h1>
        <h1 className="text-2xl font-bold">イースⅧ・イースⅨ </h1>
        <h1 className="text-end">Check out the dedicated site 公式サイト</h1>
        <h1 className="text-end text-3xl">→</h1>
        </div></Link>
        </div>
        </div>

         {/*THIS IS FOR LG RESOLUTION */}
        <div className="hidden lg:flex flex-row gap-10">
        <div className="flex flex-col">
        <div className="text-3xl lg:text-5xl"><h1>Pickup Game Title</h1></div>
        <div className="text-2xl lg:text-3xl"><h1>注目作</h1></div>
        </div>
        <div className="flex flex-col mt-5">
        <Link href="https://www.falcom.co.jp/sora/">
        <div className=""><img className="" src="/homePageMedia/homepageBanner1.webp" alt="Sora no Kiseki 1ST" />
        <h1 className="text-justify space-x-4">Pre-Orders are open! ご予約受付中
            <span className="bg-red-500">Switch</span>
            <span className="bg-blue-950">PS5</span>
            <span className="bg-gray-900">Steam</span></h1>
        <h1 className="text-2xl font-bold">空の軌跡 the 1st </h1>
        <h1 className="text-end">Check out the dedicated site 公式サイト</h1>
        <h1 className="text-end text-3xl">→</h1>
        </div></Link>
        </div>
        
        <div className="flex flex-col">
        <div className="text-5xl"><h1>Most Popular Title of All Time</h1></div>
        <div className="text-3xl"><h1>大人気ゲーム</h1></div>
        </div>
        <div className="flex flex-col mt-5">
        <Link href="https://www.falcom.co.jp/ys8-ys9_ps5">
        <div className=""><img src="/homePageMedia/homepageBanner5.webp" alt="YS IX and X" />
        <h1 className="text-justify space-x-4">Orders are now open! 今すぐご購入を
            <span className="bg-red-500">Switch</span>
            <span className="bg-blue-950">PS5</span>
            <span className="bg-gray-900">Steam</span></h1>
        <h1 className="text-2xl font-bold">イースⅧ・イースⅨ </h1>
        <h1 className="text-end">Check out the dedicated site 公式サイト</h1>
        <h1 className="text-end text-3xl">→</h1>
        </div></Link>
        </div>
        </div>
        </div>
    )
}