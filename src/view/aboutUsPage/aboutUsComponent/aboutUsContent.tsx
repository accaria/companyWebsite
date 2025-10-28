import Link from "next/link";
export default function AboutUsContents() {
  return (
    <>
      {/* CH Header*/}
      <div className="w-full h-full p-[50px] flex flex-col justify-center items-center">
        <div>
          <img
            className="w-[342.84px] h-20"
            src="/nihonFalcomLogo.svg"
            alt="Falcom Logo"
          />
        </div>
        <div className="text-center mt-10 space-y-5">
          <p>夢はいつも、ここから始まる。</p>
          <p>
            いつも、この場所で、ひとりひとりの夢がたくさんの大きな夢へと育まれてきました。
            <br /> 時代や場所を超えて人に語りかけてくるもの、夢。
          </p>
          <p>Nihon Falcom Corporation.</p>
        </div>
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 mt-10 lg:mt-20 px-4">
          <Link
            href="/AboutUsPage/CompanyHistory"
            className="relative w-full block"
          >
            <img
              src="/companyhistory.jpg"
              alt="Company History"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-pink-300 bg-opacity-80 flex items-center justify-center py-2">
              <p className="text-white font-semibold">COMPANY HISTORY</p>
            </div>
          </Link>

          <Link href="/AboutUsPage/Culture" className="relative w-full block">
            <img
              src="/culture.jpg"
              alt="Culture"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-yellow-300 bg-opacity-80 flex items-center justify-center py-2">
              <p className="text-white font-semibold">CULTURE</p>
            </div>
          </Link>

          <Link
            href="/AboutUsPage/Team"
            className="hidden relative w-full lg:block"
          >
            <img
              src="/team.jpg"
              alt="Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-green-300 bg-opacity-80 flex items-center justify-center py-2">
              <p className="text-white font-semibold">TEAM</p>
            </div>
          </Link>
        </div>
        <div className="lg:hidden flex flex-row justify-center items-center gap-4 mt-10 px-4">
          <Link href="/AboutUsPage/Team" className="relative w-full block">
            <img
              src="/team.jpg"
              alt="Team"
              className="w-[228px] h-[161.27px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-pink-300 bg-opacity-80 flex items-center justify-center py-2">
              <p className="text-white font-semibold">TEAM</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
