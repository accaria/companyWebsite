"use client"
import { CustReview } from "../../customerReviews"
export function Product4(){
    return(
        <>
        <h1 className="text-3xl mt-5">グッズ</h1>
        <hr className="border border-gray-500 my-4" />
        <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 lg:w-1/2 w-full mx-auto">
            <h1>「創の軌跡」アクリルスタンドプレート（描き起こしイラスト）</h1>
            <h2>創の軌跡</h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-100">
            <div className=""><img src="/productsPageMedia/products4.webp" alt="products4" /></div>
            <div className="lg:ml-10"><p className="text-justify"><span className="text-3xl font-bold">イース記念日6/21に発売！</span><br />
             「イース」シリーズの世界で食用の家畜として広く飼育されているピッカード。そのまるまるっとした姿を、そのままグラスに！ゆらゆらゆれるピッカードがとてもかわいいです。</p>
             <p className="lg:mt-5">注ぐ飲み物によっていろんなカラーのピッカードが出現♪小物入れとして使ってもGOOD。</p></div>
        </div>
        </div>
        <CustReview/>
        </>
    )
}