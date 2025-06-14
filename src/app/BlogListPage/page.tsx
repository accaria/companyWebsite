import BlogView from "@/view/blogListPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions"; 
import { redirect } from "next/navigation";

export default async function BlogPage(){
    const session = await getServerSession(authOptions);

    if (!session) {
    redirect("/LoginPage");
  }
    return(
        <>
        <BlogView/>
        </>
    )
}