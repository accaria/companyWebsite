import { fetchBlogService } from "@/service/blog.service";
import { IBlog } from "@/interface/blog.interface";
import Link from "next/link";
import RichText from "@/components/richText";

export default async function BlogView() {
  const blogs: IBlog[] = await fetchBlogService();
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl mb-10">ブログリスト / Blog List</h1>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 ">
          {blogs
            ? blogs.map((blog, idx) => (
                <div className="border-4 border-amber-500" key={idx}>
                  <div className="flex flex-col justify-center items-center text-justify p-5 gap-2 ">
                    <div className="font-bold text-4xl mb-2 text-center">
                      {blog.fields.title}
                    </div>
                    <div className="font-bold">
                      Published on: {blog.fields.publicationDate}
                    </div>
                    <div className="font-bold">
                      written by: {blog.fields.editorName}
                    </div>
                    <RichText article={blog.fields.article} />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
