"use client"
import { CustReview } from "../../customerReviews"
export function Product3(){
    return(
        <>
        <h1 className="text-3xl mt-5">グッズ</h1>
        <hr className="border border-gray-500 my-4" />
        <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 lg:w-1/2 w-full mx-auto">
            <h1>イース世界地図 ショットグラス</h1>
            <h2>イース</h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-100">
            <div className=""><img src="/productsPageMedia/products3.webp" alt="products3" /></div>
            <div className="lg:ml-10"><p className="text-justify"><span className="text-3xl font-bold">イース記念日6/21に発売！</span><br />
             タキシードやドレスに身を包んだ新規描き起こしイラストを使用したアクリルスタンドプレートです。</p></div>
        </div>
        </div>
        <CustReview/>
        </>
    )
}