"use client";
import { CustReview } from "../../customerReviews";

export function Product5() {
  return (
    <>
      <h1 className="text-3xl mt-5 text-center">グッズ</h1>
      <hr className="border border-gray-500 my-4" />

      <div className="flex flex-col justify-start">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 text-white py-3 lg:w-1/2 w-full mx-auto rounded-lg">
          <h1>1/8スケール フィギュア（オリジナルキャラクター）</h1>
          <h2>The Game Company SQ</h2>
        </div>

        {/* Product Details */}
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-20 gap-6 items-center">
          <div className="lg:w-1/2">
            <img
              src="/productsPageMedia/products5.jpg"
              alt="1/8スケール フィギュア"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-justify leading-relaxed">
              <span className="text-3xl font-bold">物語を、立体で感じる。</span>
              <br />
              The Game Company SQが誇るオリジナルキャラクターが、
              ついに1/8スケールフィギュアとして登場。
              <br />
              細部まで丁寧に造形された衣装や髪の流れ、
              そして彼女の中に宿る“強さと優しさ”を、
              精巧な造形と彩色で表現しました。
            </p>

            <p className="mt-5 text-justify leading-relaxed">
              台座は幻想的なモチーフをあしらい、見る角度によって印象が変化。
              どの瞬間も物語のワンシーンのように感じられる逸品です。
              <br />
              コレクションとしてはもちろん、あなたの日常を少し特別にしてくれる存在に。
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
