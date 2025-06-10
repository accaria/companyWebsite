import Footer from "../../HeaderandFooter/footer/page"
import Header from "../../HeaderandFooter/header/page"
import { CustReview } from "../../customerReviews"
export function Product6(){
    return(
        <>
        <Header/>
        <h1 className="text-3xl mt-5">グッズ</h1>
                <hr className="border border-gray-500 my-4" />
                <div className="flex flex-col justify-start">
                <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 lg:w-1/2 w-full mx-auto">
                    <h1>「創の軌跡」カットインアクリルフィギュア（全10種）</h1>
                    <h2>創の軌跡</h2>
                </div>
                <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-130">
                    <div className=""><img className="lg:w-100" src="/productsPageMedia/products6.webp" alt="products6" /></div>
                    <div className="mt-10 lg:mt-0 lg:ml-20"><p className="text-justify">創の軌跡より、カットインアクリルフィギュアが登場！</p></div>
                </div>
                </div>
                <CustReview/>
        <Footer/>
        </>
    )
}