import Header from "../HeaderandFooter/header/page"
import Footer from "../HeaderandFooter/footer/page"
import { Banner } from "./scrollingProducts"
import Link from "next/link"
export default function ProductsContents(){
    return(
        <>
        <Header/>
        <div className="flex flex-col justify-start">
        <h1 className="text-3xl mt-5 text-center">グッズ</h1>
        <Banner/>
        <div className="p-10">
        <h1 className="text-3xl">注目アイテム</h1>
        <h2 className="tracking-wide text-2xl">PICKUP</h2>
        </div>
        <div className="lg:hidden grid grid-cols-2 justify-center items-center gap-10">

        <Link href={`/IndivProductsPage/Product1`}><div className="">
        <img src="/productsPageMedia/products1.webp" alt="products1" />
        <h3 >「創の軌跡」アクリルスタンドプレート（描き起こしイラスト）</h3>
        <p className="ml-2">株式会社A3</p>
        <p className="ml-2">発売日：2025.7.15</p>
        </div></Link> 

        <Link href={`/IndivProductsPage/Product2`}><div>
        <img src="/productsPageMedia/products2.webp" alt="products2" />
        <h3 >「零の軌跡」缶バッジ（描き起こしイラスト）</h3>
        <p className="ml-2">株式会社A3</p>
        <p className="ml-2">発売日：2025.7.15</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product3`}><div>
        <img src="/productsPageMedia/products3.webp" alt="products3" />
        <h3 >「イース世界地図 ショットグラス</h3>
        <p className="ml-2">日本ファルコム</p>
        <p className="ml-2">発売日：2025.6.21</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product4`}><div>
        <img src="/productsPageMedia/products4.webp" alt="products4" />
        <h3>ピッカードゆらゆらグラス</h3>
        <p className="ml-2">日本ファルコム</p>
        <p className="ml-2">発売日：2025.6.21</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product5`}><div>
        <img src="/productsPageMedia/products5.webp" alt="products5" />
        <h3>アルティナ・オライオン界の軌跡ver.(1/8スケール)</h3>
        <p className="ml-0">コトブキヤ</p>
        <p className="ml-0">発売日：2025年11月</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product6`}><div>
        <img src="/productsPageMedia/products6.webp" alt="products6" />
        <h3>「創の軌跡」カットインアクリルフィギュア（全10種）</h3>
        <p className="ml-0">株式会社アルジャーノンプロダクト</p>
        <p className="ml-0">発売日：2025年6月</p>
        </div></Link>
        </div>
        </div>

        {/*Display for LG*/}

        <div className="hidden lg:grid grid-cols-3 justify-center items-center gap-10">

        <Link href={`/IndivProductsPage/Product1`}><div className="">
        <img src="/productsPageMedia/products1.webp" alt="products1" />
        <h3 >「創の軌跡」アクリルスタンドプレート（描き起こしイラスト）</h3>
        <p className="ml-2">株式会社A3</p>
        <p className="ml-2">発売日：2025.7.15</p>
        </div></Link> 

        <Link href={`/IndivProductsPage/Product2`}><div>
        <img src="/productsPageMedia/products2.webp" alt="products2" />
        <h3 >「零の軌跡」缶バッジ（描き起こしイラスト）</h3>
        <p className="ml-2">株式会社A3</p>
        <p className="ml-2">発売日：2025.7.15</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product3`}><div>
        <img src="/productsPageMedia/products3.webp" alt="products3" />
        <h3 >「イース世界地図 ショットグラス</h3>
        <p className="ml-2">日本ファルコム</p>
        <p className="ml-2">発売日：2025.6.21</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product4`}><div>
        <img src="/productsPageMedia/products4.webp" alt="products4" />
        <h3>ピッカードゆらゆらグラス</h3>
        <p className="ml-2">日本ファルコム</p>
        <p className="ml-2">発売日：2025.6.21</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product5`}><div>
        <img src="/productsPageMedia/products5.webp" alt="products5" />
        <h3>アルティナ・オライオン界の軌跡ver.(1/8スケール)</h3>
        <p className="ml-0">コトブキヤ</p>
        <p className="ml-0">発売日：2025年11月</p>
        </div></Link>

        <Link href={`/IndivProductsPage/Product6`}><div>
        <img src="/productsPageMedia/products6.webp" alt="products6" />
        <h3>「創の軌跡」カットインアクリルフィギュア（全10種）</h3>
        <p className="ml-0">株式会社アルジャーノンプロダクト</p>
        <p className="ml-0">発売日：2025年6月</p>
        </div></Link>
        </div>

        
        <Footer/>
        </>
    )
}