"use client";
import { CustReview } from "../../customerReviews";

export function Product6() {
  return (
    <>
      <h1 className="text-3xl mt-5 text-center">グッズ</h1>
      <hr className="border border-gray-500 my-4" />

      <div className="flex flex-col justify-start">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 text-white py-3 lg:w-1/2 w-full mx-auto rounded-lg">
          <h1>カットインアクリルフィギュア（全10種）</h1>
          <h2>The Game Company SQ</h2>
        </div>

        {/* Product Details */}
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-20 gap-6 items-center">
          <div className="lg:w-1/2">
            <img
              src="/productsPageMedia/products6.jpg"
              alt="カットインアクリルフィギュア"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-justify leading-relaxed">
              <span className="text-3xl font-bold">
                あの名シーンを、手のひらの中に。
              </span>
              <br />
              The Game Company SQから、人気キャラクターたちのカットインを
              デザインしたアクリルフィギュアが登場！
              <br />
              迫力あるポーズや印象的な表情を、
              高精細な印刷と透明感のあるアクリルで再現しました。
            </p>

            <p className="mt-5 text-justify leading-relaxed">
              全10種類のバリエーションがあり、
              並べるとまるでゲームのバトルシーンのような臨場感を味わえます。
              <br />
              コレクションはもちろん、お気に入りのキャラクターを飾るにも最適。
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
