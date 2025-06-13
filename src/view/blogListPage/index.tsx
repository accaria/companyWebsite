import { fetchBlogService } from "@/service/blog.service";
import { IBlog } from "@/interface/blog.interface";
import Link from "next/link";
import RichText from "@/components/richText";

export default async function BlogView(){
   const blogs : IBlog[]= await fetchBlogService();
    return(
        <>
        <div className="flex flex-col p-10 gap-10 lg:flex-row ">
            {blogs?blogs.map((blog,idx)=>(
                <div key={idx}>
                    <div className="flex flex-col justify-center items-center ">
                    <div className="font-bold text-4xl mb-2">{blog.fields.title}</div>
                    <div>Published on: {blog.fields.publicationDate}</div>
                    <div>written by: {blog.fields.editorName}</div>
                    <RichText article={blog.fields.article}/>
                    </div>
                </div>
            )):null}
        </div>
        </>
    )
}

/*
<div className="flex flex-row mb-10">
            {blogs?blogs.map((blog,idx)=>(
                <div key={idx}>
                    <div className="flex flex-col justify-center items-center ">
                    <div className="font-bold text-4xl mb-2">{blog.fields.title}</div>
                    <div>Published on: {blog.fields.publicationDate}</div>
                    <div>{blog.fields.editorName}</div>
                    <RichText article={blog.fields.article}/>
                    </div>
                </div>
            )):null}
        </div>
        <div className="flex flex-row mb-10"> 
            {blogs[1] && (
                <div className="flex flex-col justify-center items-center mb-10">
                <div className="font-bold text-4xl mb-2">{blogs[1].fields.title}</div>
                <div>Published on: {blogs[1].fields.publicationDate}</div>
                <div>{blogs[1].fields.editorName}</div>
                <RichText article={blogs[1].fields.article} />
                </div>
         )}
            {blogs[2] && (
                <div className="flex flex-col justify-center items-center mb-10">
                <div className="font-bold text-4xl mb-2">{blogs[2].fields.title}</div>
                <div>Published on: {blogs[2].fields.publicationDate}</div>
                <div>{blogs [2].fields.editorName}</div>
                <RichText article={blogs[2].fields.article} />
                </div>
         )}
        </div>
*/