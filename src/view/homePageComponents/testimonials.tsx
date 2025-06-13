export default function Testimonials (){
    return(
        <>
        <div className="w-full p-10 ">
        <h1 className="text-3xl mt-5 ">ビジネスパートナ</h1>
        <h1 className="text-2xl mt-5">Business Partner</h1>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between p-5 gap-5 items-center w-full text-orange-400">
        <div className="border-orange-400 border-4 text-center justify-center items-center">
            <h1 className="text-3xl font-bold text-center">株式会社 A</h1>
            <img className="w-100" src="/homePageMedia/businessLogo1.jpg" alt="customer prof pic" />
            <h1 className="text-3xl font-bold">ゲーム内の音声とのコラボ</h1>
            <h1 className="text-3xl font-bold">1997年からのコラボ</h1>
        </div>
        <div className="border-orange-400 border-4 text-center">
            <h1 className="text-3xl font-bold text-center">株式会社 B</h1>
            <img className="w-100" src="/homePageMedia/businessLogo2.jpg" alt="customer prof pic" />
            <h1 className="text-3xl font-bold">ゲーム内の音声とのコラボ</h1>
            <h1 className="text-3xl font-bold">1997年からのコラボ</h1>
        </div>
        <div className="border-orange-400 border-4 text-center">
            <h1 className="text-3xl font-bold text-center">株式会社 C</h1>
            <img className="w-100" src="/homePageMedia/businessLogo3.webp" alt="customer prof pic" />
            <h1 className="text-3xl font-bold">ゲーム内の音声とのコラボ</h1>
            <h1 className="text-3xl font-bold">1997年からのコラボ</h1>
        </div>
        </div>
        </div>
        
        </>
    )
}