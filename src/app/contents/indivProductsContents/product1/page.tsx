import Footer from "../../HeaderandFooter/footer/page"
import Header from "../../HeaderandFooter/header/page"
import { CustReview } from "../../customerReviews"
export function Product1(){
    return(
        <>
        <Header/>
        <h1 className="text-3xl mt-5">グッズ</h1>
        <hr className="border border-gray-500 my-4" />
        <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 lg:w-1/2 w-full mx-auto">
            <h1>「創の軌跡」アクリルスタンドプレート（描き起こしイラスト）</h1>
            <h2>創の軌跡</h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-100">
            <div className=""><img src="/productsPageMedia/products1.webp" alt="products1" /></div>
            <div className=""><p className="text-justify">『零の軌跡』＆『創の軌跡』から周年を記念した新商品が登場。<br />
             タキシードやドレスに身を包んだ新規描き起こしイラストを使用したアクリルスタンドプレートです。</p></div>
        </div>
        </div>
        <CustReview/>
        <Footer/>
        </>
    )
}