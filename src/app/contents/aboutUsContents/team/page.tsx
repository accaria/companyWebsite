import Header from "../../HeaderandFooter/header/page"
import Footer from "../../HeaderandFooter/footer/page"
export default function Team(){
    return(
        <>
        <Header/>
        <div className="w-full h-full p-[50px] flex flex-col justify-center items-start">
        <div className="text-3xl font-bold mb-10"><h1>スタッフインタビュー</h1></div>
        <p>ゲームソフトウェアの企画から開発、販売までのすべてを自社で行っているファルコム。そんなファルコムで働くってどういうことなんだろう？ 各職種のスタッフにインタビューを行いました。
            現場の生の声をお聞きください！</p>
        </div>
        <Footer/>
        </>
    )
}