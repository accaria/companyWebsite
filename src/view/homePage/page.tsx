import HomePageContents from "@/app/contents/homePageContents"
import Header from "@/app/contents/HeaderandFooter/header/page"
import Footer from "@/app/contents/HeaderandFooter/footer/page"

export default function HomePageView(){
    return(
        <>
        <Header/>
        <HomePageContents/>
        <Footer/>
        </>
    )
}