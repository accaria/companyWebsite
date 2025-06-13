import { HomeBanner } from "../productsContents/scrollingProducts"
import HeroSection from "./heroSection"
import CompanyOverview from "./companyOverview"
import ProductHomePage from "./productsSection"
import Testimonials from "./testimonials"
export default function HomePageContents(){
    return(
        <>
        <HomeBanner/>
        <div className="mt-5"><HeroSection/></div>
        <div className="mt-5 lg:mt-0"><CompanyOverview/></div>
        <div className="mt-5 lg:mt-0"><ProductHomePage/></div>
        <div className="mt-5 lg:mt-0"><Testimonials/></div>
        </>
    )
}