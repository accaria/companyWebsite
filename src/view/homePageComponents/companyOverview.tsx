import Link from "next/link";

export default function CompanyOverview() {
  return (
    <>
      <div className="flex flex-col justify-start">
        <div className="p-10">
          <h1 className="text-3xl mt-5">Company Overview</h1>
          <h1 className="text-2xl mt-5">会社概要</h1>
        </div>
        <div className="flex flex-row justify-center items-center lg:items-start gap-30 p-10 lg:p-0">
          <div className="lg:hidden">
            <Link href="/AboutUsPage/CompanyHistory">
              <img
                className="w-52 h-auto mb-5"
                src="/companyhistory.jpg"
                alt="Company History"
              />
              <h1 className="text-2xl text-center">ファルコムの歴史</h1>
              <h1 className="text-2xl text-center">Falcom's History</h1>
            </Link>
          </div>
          <div className="lg:hidden">
            <Link href="/AboutUsPage/Culture">
              <img
                className="w-60 h-auto mb-5"
                src="/culture.jpg"
                alt="Culture"
              />
              <h1 className="text-2xl text-center">ファルコムの社風</h1>
              <h1 className="text-2xl text-center">Falcom's Culture</h1>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <Link href="/AboutUsPage/Team">
            <img className="w-60 h-auto mb-5" src="/team.jpg" alt="Team" />
            <h1 className="text-2xl text-center">ファルコムのチーム</h1>
            <h1 className="text-2xl text-center">Falcom's Teams</h1>
          </Link>
        </div>

        <div className="hidden lg:flex flex-col justify-start items-start gap-20 p-20">
          <div className="flex flex-row items-center gap-5">
            <div>
              <Link href="/AboutUsPage/CompanyHistory">
                <img
                  className="w-full h-auto mb-5"
                  src="/companyhistory.jpg"
                  alt="Company History"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl ">ザ・ゲームカンパニーSQの歩み</h1>
              <h1 className="text-2xl ">The Journey of The Game Company SQ</h1>
              <p className="">
                2000年に設立されたザ・ゲームカンパニーSQ。
                数々の試練を乗り越え、今も新たな物語を紡ぎ続けています。
              </p>
              <p>
                Founded in 2000, The Game Company SQ has overcome countless
                challenges
                <br />
                and continues to weave new stories even today.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-5">
            <div>
              <Link href="/AboutUsPage/Culture">
                <img
                  className="w-full h-auto mb-5"
                  src="/culture.jpg"
                  alt="Culture"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl">ザ・ゲームカンパニーSQの社風</h1>
              <h1 className="text-2xl">The Culture of The Game Company SQ</h1>
              <p>
                私たちは、ジャンルやスタイルの枠にとらわれず、
                <br />
                あらゆるゲームの魅力を尊重し、楽しむ心を大切にしています。
                <br />
                新しい挑戦を恐れず、世界中のプレイヤーに感動を届けることを目指しています。
              </p>
              <p>
                At The Game Company SQ, we embrace every kind of game—beyond
                genre and style.
                <br />
                We value the spirit of fun and respect for creativity,
                <br />
                always striving to inspire players around the world through new
                challenges.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-5">
            <div>
              <Link href="/AboutUsPage/Team">
                <img className="w-200 h-auto mb-5" src="/team.jpg" alt="Team" />
              </Link>
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl">ザ・ゲームカンパニーSQのチーム</h1>
              <h1 className="text-2xl">The Teams of The Game Company SQ</h1>
              <p>
                私たちのチームは、ゲームを「遊ぶこと」と「創ること」の両方を愛する、
                <br />
                才能あふれるメンバーで構成されています。
                <br />
                それぞれの分野でプロフェッショナルとして活躍し、
                <br />
                共に最高の体験を生み出すことを目指しています。
              </p>
              <p>
                Our team is made up of talented individuals who love both
                playing
                <br />
                and creating games. Each member is a professional in their own
                field,
                <br />
                working together to craft the best experiences possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
