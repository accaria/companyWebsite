"use client"
import { CustReview } from "../../customerReviews"
export function Product5(){
    return(
        <>
        <h1 className="text-3xl mt-5">グッズ</h1>
            <hr className="border border-gray-500 my-4" />
            <div className="flex flex-col justify-start">
            <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 lg:w-1/2 w-full mx-auto">
                <h1>アルティナ・オライオン 界の軌跡ver.（1/8スケール）</h1>
                <h2>界の軌跡</h2>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-100">
                <div className=""><img className="lg:w-800" src="/productsPageMedia/products5.webp" alt="products5" /></div>
                <div className="lg:ml-10"><p className="text-justify"><span className="text-3xl font-bold">どうか、支えさせてください。トールズという同じ足場で。</span><br />
                「軌跡シリーズ」からアルティナが『界の軌跡』の姿で新規立体化！</p>
                <p className="mt-5">トールズ士官学院卒業後、元教官であるリィンとともにカルバード共和国へ渡った際の姿で立体化いたしました。
                    長く伸びた美しい流れを描く髪は、クリアパーツにグラデーション塗装を行うことで再現。
                    かつての彼女に比べて伸びた背丈はもちろん、様々な人との出会いの中で成長した彼女の内面を表すような柔らかな表情にも注目です。
                    足元の台座にはアルティナを長く支え続けている相棒の戦術殻「クラウ＝ソラス」をプリント。</p></div>
            </div>
            </div>
        <CustReview/>
        </>
    )
}