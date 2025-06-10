export function CustReview(){
    return(
        <>
        <div className="mt-5 w-full">
        <h1 className="text-center lg:text-2xl font-semibold border-orange-500 border-2 bg-neutral-700 p-[15px]">お客様の声 / Customer Review</h1>
        <div className="flex flex-row justify-start lg:justify-between p-5 gap-5 items-center w-full">
        <div className="">
            <img className="w-10" src="/customerProfilePic.jpg" alt="customer prof pic" />
            <h1>Satoship67</h1>
            <h1>★★★★</h1>
            <h1>めっちゃいいアイテム</h1>
        </div>
        <div className="">
            <img className="w-10" src="/customerProfilePic.jpg" alt="customer prof pic" />
            <h1>Mutou87</h1>
            <h1>★★★★★</h1>
            <h1>めっちゃいいアイテム</h1>
        </div>
        <div className="">
            <img className="w-10" src="/customerProfilePic.jpg" alt="customer prof pic" />
            <h1>Satou100</h1>
            <h1>★★★★★</h1>
            <h1>めっちゃいいアイテム</h1>
        </div>
        <div className="">
            <img className="w-10" src="/customerProfilePic.jpg" alt="customer prof pic" />
            <h1>Kato188</h1>
            <h1>★★★★★</h1>
            <h1>めっちゃいいアイテム</h1>
        </div>
        </div>
        </div>
        </>
    )
}