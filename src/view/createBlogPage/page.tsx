import Header from "@/app/contents/HeaderandFooter/header/page"
import Footer from "@/app/contents/HeaderandFooter/footer/page"
export default function CreateBlog(){
    return (
        <>
        <Header/>
        <div className="p-10">
        <h1 className="text-3xl mt-5">Create a Blog</h1>
        <h1 className="text-2xl mt-5">ブログ作成</h1>
        </div>
        <Footer/>
        </>
    )
}