"use client";
import { CustReview } from "../../customerReviews";

export function Product4() {
  return (
    <>
      <h1 className="text-3xl mt-5 text-center">グッズ</h1>
      <hr className="border border-gray-500 my-4" />

      <div className="flex flex-col justify-start">
        {/* Product Header */}
        <div className="flex flex-col justify-center items-center lg:text-2xl font-bold bg-gray-700 text-white py-3 lg:w-1/2 w-full mx-auto rounded-lg">
          <h1>アニマルモチーフグラス</h1>
          <h2>The Game Company SQ</h2>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col lg:flex-row mt-10 px-5 lg:px-20 gap-6 items-center">
          <div className="lg:w-1/2">
            <img
              src="/productsPageMedia/products4.jpg"
              alt="アニマルモチーフグラス"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="lg:w-1/2">
            <p className="text-justify leading-relaxed">
              <span className="text-3xl font-bold">
                冒険者の日常を彩る、癒しのグラス。
              </span>
              <br />
              丸みのある可愛らしいアニマルモチーフをあしらった特製グラスです。
              <br />
              注ぐ飲み物によって、まるでキャラクターが表情を変えるように見えるデザイン。
              <br />
              ゆらめく液体の中で、ちょっとしたファンタジーの世界を感じられます。
            </p>
            <p className="mt-5 text-justify leading-relaxed">
              飲み物を注ぐだけでなく、小物入れとして飾ってもぴったり。
              <br />
              使うたびに心が和む、The Game Company
              SQのこだわりが詰まったアイテムです。
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
