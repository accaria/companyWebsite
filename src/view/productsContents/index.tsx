import { Banner } from "./scrollingProducts";
import Link from "next/link";

export default function ProductsContents() {
  return (
    <>
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl mt-5 text-center">グッズ</h1>
        <Banner />
        <div className="p-10">
          <h1 className="text-3xl">注目アイテム</h1>
          <h2 className="tracking-wide text-2xl">PICKUP</h2>
        </div>

        {/* Mobile Display */}
        <div className="lg:hidden grid grid-cols-2 justify-center items-center gap-10">
          <Link href={`/IndivProductsPage/Product1`}>
            <div>
              <img src="/productsPageMedia/products1.jpg" alt="products1" />
              <h3>アクリルスタンドプレート（キャラクターコレクション）</h3>
              <p className="ml-2">The Game Company SQ</p>
              <p className="ml-2">発売日：2025.7.15</p>
            </div>
          </Link>

          <Link href={`/IndivProductsPage/Product2`}>
            <div>
              <img src="/productsPageMedia/products2.jpg" alt="products2" />
              <h3>オリジナル缶バッジセット（全6種）</h3>
              <p className="ml-2">The Game Company SQ</p>
              <p className="ml-2">発売日：2025.7.15</p>
            </div>
          </Link>

          <Link href={`/IndivProductsPage/Product3`}>
            <div>
              <img src="/productsPageMedia/products3.jpg" alt="products3" />
              <h3>ワールドマップショットグラス</h3>
              <p className="ml-2">The Game Company SQ</p>
              <p className="ml-2">発売日：2025.6.21</p>
            </div>
          </Link>

          <Link href={`/IndivProductsPage/Product4`}>
            <div>
              <img src="/productsPageMedia/products4.jpg" alt="products4" />
              <h3>キャラクターモチーフグラス</h3>
              <p className="ml-2">The Game Company SQ</p>
              <p className="ml-2">発売日：2025.6.21</p>
            </div>
          </Link>

          <Link href={`/IndivProductsPage/Product5`}>
            <div>
              <img src="/productsPageMedia/products5.jpg" alt="products5" />
              <h3>1/8スケール フィギュア（オリジナルキャラクター）</h3>
              <p className="ml-0">The Game Company SQ</p>
              <p className="ml-0">発売日：2025年11月</p>
            </div>
          </Link>

          <Link href={`/IndivProductsPage/Product6`}>
            <div>
              <img src="/productsPageMedia/products6.jpg" alt="products6" />
              <h3>カットインアクリルフィギュア（全10種）</h3>
              <p className="ml-0">The Game Company SQ</p>
              <p className="ml-0">発売日：2025年6月</p>
            </div>
          </Link>
        </div>
      </div>

      {/* LG Display */}
      <div className="hidden lg:grid grid-cols-3 justify-center items-center gap-10">
        <Link href={`/IndivProductsPage/Product1`}>
          <div>
            <img src="/productsPageMedia/products1.jpg" alt="products1" />
            <h3>アクリルスタンドプレート（キャラクターコレクション）</h3>
            <p className="ml-2">The Game Company SQ</p>
            <p className="ml-2">発売日：2025.7.15</p>
          </div>
        </Link>

        <Link href={`/IndivProductsPage/Product2`}>
          <div>
            <img src="/productsPageMedia/products2.jpg" alt="products2" />
            <h3>オリジナル缶バッジセット（全6種）</h3>
            <p className="ml-2">The Game Company SQ</p>
            <p className="ml-2">発売日：2025.7.15</p>
          </div>
        </Link>

        <Link href={`/IndivProductsPage/Product3`}>
          <div>
            <img src="/productsPageMedia/products3.jpg" alt="products3" />
            <h3>ワールドマップショットグラス</h3>
            <p className="ml-2">The Game Company SQ</p>
            <p className="ml-2">発売日：2025.6.21</p>
          </div>
        </Link>

        <Link href={`/IndivProductsPage/Product4`}>
          <div>
            <img src="/productsPageMedia/products4.jpg" alt="products4" />
            <h3>キャラクターモチーフグラス</h3>
            <p className="ml-2">The Game Company SQ</p>
            <p className="ml-2">発売日：2025.6.21</p>
          </div>
        </Link>

        <Link href={`/IndivProductsPage/Product5`}>
          <div>
            <img src="/productsPageMedia/products5.jpg" alt="products5" />
            <h3>1/8スケール フィギュア（オリジナルキャラクター）</h3>
            <p className="ml-0">The Game Company SQ</p>
            <p className="ml-0">発売日：2025年11月</p>
          </div>
        </Link>

        <Link href={`/IndivProductsPage/Product6`}>
          <div>
            <img src="/productsPageMedia/products6.jpg" alt="products6" />
            <h3>カットインアクリルフィギュア（全10種）</h3>
            <p className="ml-0">The Game Company SQ</p>
            <p className="ml-0">発売日：2025年6月</p>
          </div>
        </Link>
      </div>
    </>
  );
}
