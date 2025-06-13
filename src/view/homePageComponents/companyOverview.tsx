import Link from "next/link"

export default function CompanyOverview(){
    return(
        <>
        <div className="flex flex-col justify-start">
        <div className="p-10">
        <h1 className="text-3xl mt-5">Company Overview</h1>
        <h1 className="text-2xl mt-5">会社概要</h1>
        </div>
        <div className="flex flex-row justify-center items-center lg:items-start gap-30 p-10 lg:p-0">
        <div className="lg:hidden">
        <Link href="/AboutUsPage/CompanyHistory">
        <img className="w-52 h-auto mb-5" src="/companyhistory.webp" alt="Company History" />
        <h1 className="text-2xl text-center">ファルコムの歴史</h1>
        <h1 className="text-2xl text-center">Falcom's History</h1>
        </Link>
        </div>
        <div className="lg:hidden">
        <Link href="/AboutUsPage/Culture">
        <img className="w-60 h-auto mb-5" src="/culture.webp" alt="Culture" />
        <h1 className="text-2xl text-center">ファルコムの社風</h1>
        <h1 className="text-2xl text-center">Falcom's Culture</h1>
        </Link>
        </div>
        </div>
        <div className="flex justify-center items-center lg:hidden">
        <Link href="/AboutUsPage/Team">
        <img className="w-60 h-auto mb-5" src="/team.webp" alt="Team" />
        <h1 className="text-2xl text-center">ファルコムのチーム</h1>
        <h1 className="text-2xl text-center">Falcom's Teams</h1>
        </Link>
        </div>

        <div className="hidden lg:flex flex-col justify-start items-start gap-20 p-20">
        <div className="flex flex-row items-center gap-5">
        <div><Link href="/AboutUsPage/CompanyHistory">
        <img className="w-full h-auto mb-5" src="/companyhistory.webp" alt="Company History" /></Link>
        </div>
        <div className="flex flex-col justify-start">
        <h1 className="text-2xl ">ファルコムの歴史</h1>
        <h1 className="text-2xl ">Falcom's History</h1>
        <p className="">翼こ援同るドん都込づこべえ必周スル影断フクウ聞刊3競ぎいめ台当ロス村右ノツニア江米ひぶぞ提員苦気ヘユ皮力ノワソ印提べやクょ捕道シソナヘ中息セノケ美利ドっづフ。</p>
        </div>
        </div>

        <div className="flex flex-row items-center gap-5">
        <div>
        <Link href="/AboutUsPage/Culture">
        <img className="w-full h-auto mb-5" src="/culture.webp" alt="Culture" /></Link>
        </div>
        <div className="flex flex-col justify-start">
        <h1 className="text-2xl">ファルコムの社風</h1>
        <h1 className="text-2xl">Falcom's Culture</h1>
        <p className="">翼こ援同るドん都込づこべえ必周スル影断フクウ聞刊3競ぎいめ台当ロス村右ノツニア江米ひぶぞ提員苦気ヘユ皮力ノワソ印提べやクょ捕道シソナヘ中息セノケ美利ドっづフ。
            登ふわにだ将進ミキソケ典了らさだぐ療対ざん令理比く第楽つぞ仕芸ネトユ早両ずぽ城方テルノワ回家供懐蓄体クし。</p>
        </div>
        </div>
        
        <div className="flex flex-row items-center gap-5">
        <div>
        <Link href="/AboutUsPage/Team">
        <img className="w-200 h-auto mb-5" src="/team.webp" alt="Team" /></Link>
        </div>
        <div className="flex flex-col justify-start">
        <h1 className="text-2xl ">ファルコムのチーム</h1>
        <h1 className="text-2xl ">Falcom's Teams</h1>
        <p className="">翼こ援同るドん都込づこべえ必周スル影断フクウ聞刊3競ぎいめ台当ロス村右ノツニア江米ひぶぞ提員苦気ヘユ皮力ノワソ印提べやクょ捕道シソナヘ中息セノケ美利ドっづフ。
            登ふわにだ将進ミキソケ典了らさだぐ療対ざん令理比く第楽つぞ仕芸ネトユ早両ずぽ城方テルノワ回家供懐蓄体クし。</p>
        </div>
        </div>

        </div>
        </div>
        </>
    )
}