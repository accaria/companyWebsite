export default function CompanyHistory() {
  return (
    <>
      <div className="w-full h-full p-[50px] flex flex-col justify-center items-start">
        <div className="text-3xl font-bold">
          <h1>会社概要</h1>
        </div>
        <hr className="border-t-4 border-gray-500 my-4" />
        <table className="table-auto w-full border border-gray-300">
          <tbody>
            <tr className="bg-gray-500">
              <td className="w-1/4 border px-4 py-2 font-bold">会社名</td>
              <td className="w-3/4 border px-4 py-2">株式会社ゲームスクエア</td>
            </tr>
            <tr className="bg-gray-700">
              <td className="w-1/4 border px-4 py-2 font-bold">英訳名</td>
              <td className="w-3/4 border px-4 py-2">
                The Game Company SQ Co., Ltd.
              </td>
            </tr>
            <tr className="bg-gray-500">
              <td className="w-1/4 border px-4 py-2 font-bold">所在地</td>
              <td className="w-3/4 border px-4 py-2">
                〒160-0023 <br />
                東京都新宿区西新宿3-5-10 ゲームスクエアビル 5F <br />
                TEL 03-1234-5678 (代) | FAX 03-8765-4321
              </td>
            </tr>
            <tr className="bg-gray-700">
              <td className="w-1/4 border px-4 py-2 font-bold">創業</td>
              <td className="w-3/4 border px-4 py-2">
                2000年 ( 平成12年 ) 4月
              </td>
            </tr>
            <tr className="bg-gray-500">
              <td className="w-1/4 border px-4 py-2 font-bold">設立</td>
              <td className="w-3/4 border px-4 py-2">
                2003年 ( 平成15年 ) 7月
              </td>
            </tr>
            <tr className="bg-gray-700">
              <td className="w-1/4 border px-4 py-2 font-bold">資本金</td>
              <td className="w-3/4 border px-4 py-2">85,000,000 円</td>
            </tr>
            <tr className="bg-gray-500">
              <td className="w-1/4 border px-4 py-2 font-bold">代表者</td>
              <td className="w-3/4 border px-4 py-2">
                代表取締役社長　佐藤 翼
              </td>
            </tr>
            <tr className="bg-gray-700">
              <td className="w-1/4 border px-4 py-2 font-bold">事業内容</td>
              <td className="w-3/4 border px-4 py-2">
                ゲームソフトの企画・開発・販売 <br />
                デジタルエンターテインメント関連事業 <br />
                ミュージック・映像制作 <br />
                キャラクターグッズの企画・販売 <br />
                各種ライセンス事業
              </td>
            </tr>
            <tr className="bg-gray-500">
              <td className="w-1/4 border px-4 py-2 font-bold">主要取引先</td>
              <td className="w-3/4 border px-4 py-2">
                株式会社グローバルエンターテインメント <br />
                株式会社ソリッドリンク <br />
                株式会社ネクストクリエイト <br />
                株式会社アイディス <br />
                株式会社デジタルウェーブ
              </td>
            </tr>
            <tr className="bg-gray-700">
              <td className="w-1/4 border px-4 py-2 font-bold">取引銀行</td>
              <td className="w-3/4 border px-4 py-2">
                三井住友銀行 新宿支店 <br /> みずほ銀行 新宿中央支店
              </td>
            </tr>
            <tr className="bg-gray-500">
              <td className="w-1/4 border px-4 py-2 font-bold">所属団体</td>
              <td className="w-3/4 border px-4 py-2">
                一般社団法人コンピュータエンターテインメント協会 (CESA)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
