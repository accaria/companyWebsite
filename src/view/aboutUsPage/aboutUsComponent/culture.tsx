export default function Culture() {
  return (
    <>
      <div className="w-full h-full p-[50px] flex flex-col justify-center items-start">
        <div className="text-3xl font-bold mb-10">
          <h1>ゲームスクエアの社風</h1>
        </div>
        <p>
          創業以来、変わらない情熱を持ち続け、常に新しい体験と感動を届けてきたゲームスクエア。
          <br />
          私たちがどのような環境でゲームを生み出しているのか、そのこだわりと雰囲気をご紹介します。
        </p>

        <div className="grid grid-cols-2 gap-10 mt-20 items-center">
          {/* 1️⃣ Company Creativity Philosophy */}
          <div className="space-y-4 text-justify m-10">
            <h1 className="mb-10 lg:text-2xl font-semibold border-green-500 border-2 bg-neutral-700 p-[15px]">
              ゲームスクエアのクリエイティビティ
            </h1>
            <p>
              「クリエイターが、自分の“好き”を形にできる場所」であること――。
              それが私たちの会社の基本的な考え方です。
            </p>
            <p>
              ゲームスクエアでは、ゲームだけでなく、音楽・アート・映像など幅広いジャンルの制作を行っています。
              企画から開発、デザインまで、すべての工程にスタッフが直接関わり、
              “本当に作りたいもの”を自由に表現できる環境を大切にしています。
            </p>
            <p>
              その自由な発想と挑戦こそが、私たちのオリジナリティを生み出しています。
            </p>
          </div>
          <div>
            <img src="/culturePic1.jpg" alt="Culture Pic1" />
          </div>

          {/* 2️⃣ Team Characteristics */}
          <div>
            <img src="/culturePic2.jpg" alt="Culture Pic2" />
          </div>
          <div className="space-y-4 text-justify m-10">
            <h1 className="mb-10 lg:text-2xl font-semibold border-green-500 border-2 bg-neutral-700 p-[15px]">
              チームメンバーの特徴
            </h1>
            <h1 className="mb-10 lg:text-2xl font-semibold">
              「ゲームを創りたい」という
              <strong className="text-green-400">純粋な想い</strong>
            </h1>
            <p>
              私たちのチームは、経験や経歴よりも“情熱”を大切にしています。
              実務経験の有無に関わらず、「ゲームが好き」「作ることが楽しい」と思える人が多く集まっています。
            </p>
            <p>
              各メンバーがそれぞれの得意分野を持ち寄り、互いを尊重しながら新しい価値を生み出しています。
            </p>
            <h1 className="mb-10 lg:text-2xl font-semibold">
              <span className="text-green-400">自分の可能性</span>を広げる場所
            </h1>
            <p>
              職種や部署の枠にとらわれず、やりたいことに挑戦できる文化があります。
              デザイナーが企画に参加したり、プログラマーが演出アイデアを出したりと、
              柔軟なチームワークが特徴です。
            </p>
            <p>
              ゲームスクエアは、好奇心と探究心を持つ人にとって、
              自分の可能性を最大限に試せるフィールドです。
            </p>
          </div>

          {/* 3️⃣ Work Environment */}
          <div className="space-y-4 text-justify m-10">
            <h1 className="mb-10 lg:text-2xl font-semibold border-green-500 border-2 bg-neutral-700 p-[15px]">
              仕事環境について
            </h1>
            <h1 className="mb-10 lg:text-2xl font-semibold">
              創造の中心地 <span className="text-green-400">新宿</span>から
            </h1>
            <p>
              オフィスは東京都新宿区の中心に位置し、駅から徒歩数分の便利な立地です。
              周辺にはカフェや公園も多く、リフレッシュできる環境が整っています。
            </p>
            <p>
              明るく開放的なオフィスは、集中とコミュニケーションの両立を意識した設計。
              一人ひとりがアイデアを出しやすく、チーム全体で協力しやすい空間です。
            </p>
            <p>
              快適な環境で働きながら、最高の作品を創る――。
              それがゲームスクエアの目指す職場です。
            </p>
          </div>
          <div>
            <img src="/culturePic3.jpg" alt="Culture Pic3" />
          </div>
        </div>
      </div>
    </>
  );
}
