export default function CompanyHistory(){
    return(
        <>
        <div className="w-full h-full p-[50px] flex flex-col justify-center items-start ">
        <div className="text-3xl font-bold"><h1>会社概要</h1>
        </div>
        <hr className="border-t-4 border-gray-500 my-4"/>
        <table className="table-auto w-full border border-gray-300">
            <tbody>
                <tr className="bg-gray-500">
                    <td className="w-1/4 border px-4 py-2 font-bold">会社名</td>
                    <td className="w-3/4 border px-4 py-2">日本ファルコム株式会社</td>
                </tr>
                <tr className="bg-gray-700">
                    <td className="w-1/4 border px-4 py-2 font-bold">英訳名	</td>
                    <td className="w-3/4 border px-4 py-2">NIHON FALCOM CORPORATION</td>
                </tr>
                <tr className="bg-gray-500">
                    <td className="w-1/4 border px-4 py-2 font-bold">所在地</td>
                    <td className="w-3/4 border px-4 py-2">〒190-0012 <br />東京都立川市曙町2-8-18 東京建物ファーレ立川ビル <br />TEL 042-527-0555 (代) | FAX 042-528-2714</td>
                </tr>
                <tr className="bg-gray-700">
                    <td className="w-1/4 border px-4 py-2 font-bold">創業</td>
                    <td className="w-3/4 border px-4 py-2">1981年 ( 昭和56年 ) 3月</td>
                </tr>
                <tr className="bg-gray-500">
                    <td className="w-1/4 border px-4 py-2 font-bold">設立</td>
                    <td className="w-3/4 border px-4 py-2">2001年 ( 平成13年 ) 11月</td>
                </tr>
                <tr className="bg-gray-700">
                    <td className="w-1/4 border px-4 py-2 font-bold">資本金</td>
                    <td className="w-3/4 border px-4 py-2">164,130,000 円</td>
                </tr>
                <tr className="bg-gray-500">
                    <td className="w-1/4 border px-4 py-2 font-bold">代表者</td>
                    <td className="w-3/4 border px-4 py-2">代表取締役社長　近藤季洋</td>
                </tr>
                <tr className="bg-gray-700">
                    <td className="w-1/4 border px-4 py-2 font-bold">事業内容</td>
                    <td className="w-3/4 border px-4 py-2">自社タイトルゲームソフトの開発・制作 <br />ミュージックタイトル・ビデオタイトルの制作 <br />
                    オリジナルゲームソフトの企画 <br />
                    ゲームソフトおよび関連商品の販売 <br />
                    各種ライセンス提供</td>
                </tr>
                <tr className="bg-gray-500">
                    <td className="w-1/4 border px-4 py-2 font-bold">主要取引先</td>
                    <td className="w-3/4 border px-4 py-2">株式会社アイ・シー・エージェンシー<br />アイチューンズ株式会社 <br />アイディアファクトリー株式会社 <br /> 株式会社アイディス
                    <br /> 株式会社アイロリ・エンタテインメント</td>
                </tr>
                <tr className="bg-gray-700">
                    <td className="w-1/4 border px-4 py-2 font-bold">取引銀行</td>
                    <td className="w-3/4 border px-4 py-2">三井住友銀行立川支店 <br /> みずほ銀行立川支店 </td>
                </tr>
                <tr className="bg-gray-500">
                    <td className="w-1/4 border px-4 py-2 font-bold">所属団体</td>
                    <td className="w-3/4 border px-4 py-2">(社)コンピュータソフトウェア著作権協会 (ACCS)</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}