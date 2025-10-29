"use client";
import { CustReview } from "../../customerReviews";

export function Product1() {
  return (
    <>
      <h1 className="text-3xl mt-5 text-center">グッズ</h1>
      <hr className="border border-gray-500 my-4" />

      <div className="flex flex-col justify-start">
        {/* Product Header */}
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 text-white py-3 lg:w-1/2 w-full mx-auto rounded-lg">
          <h1>アクリルスタンドプレート（キャラクターコレクション）</h1>
          <h2>The Game Company SQ</h2>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-20 gap-6 items-center">
          <div className="lg:w-1/2">
            <img
              src="/productsPageMedia/products1.jpg"
              alt="アクリルスタンドプレート（キャラクターコレクション）"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-justify leading-relaxed">
              ゲームの世界観をモチーフにしたオリジナルデザインのアクリルスタンドプレートです。
              <br />
              透明感のある素材と精巧な印刷が特徴で、お気に入りのキャラクターを
              デスクや棚に飾って楽しむことができます。
              <br />
              コレクションにもギフトにも最適なアイテムです。
            </p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-10">
        <CustReview />
      </div>
    </>
  );
}
