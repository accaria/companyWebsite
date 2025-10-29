"use client";
import { CustReview } from "../../customerReviews";

export function Product2() {
  return (
    <>
      <h1 className="text-3xl mt-5 text-center">グッズ</h1>
      <hr className="border border-gray-500 my-4" />

      <div className="flex flex-col justify-start">
        {/* Product Header */}
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 text-white py-3 lg:w-1/2 w-full mx-auto rounded-lg">
          <h1>オリジナル缶バッジセット（全6種）</h1>
          <h2>The Game Company SQ</h2>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-20 gap-6 items-center">
          <div className="lg:w-1/2">
            <img
              src="/productsPageMedia/products2.jpg"
              alt="オリジナル缶バッジセット（全6種）"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-justify leading-relaxed">
              キャラクターやアイコンをモチーフにした全6種類のオリジナル缶バッジセットです。
              <br />
              高品質な印刷と耐久性のある素材を使用しており、
              カバンやジャケットに取り付けても色あせにくく、長く楽しめます。
              <br />
              コレクションとして飾るのもおすすめです。
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
