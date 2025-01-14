import React from "react";
import { BlogCard, SearchBlogBar } from "@/components/index";


interface BlogType {
  id: string;
  topicID: string;
  subTopicId: string;
  title: string;
  shortDesc: string;
  image?: string;
  writtenBy: string;
  approvedBy: string;
  creationTime: string;
  basePhotoUrl:string;
  authorImage:string;
}
type Props = {
  blogs:BlogType[]
};

export default function BlogView({blogs}: Props) {
  return (
    <div>
      {blogs.length == 0 && (
        <p className="text-5xl font-semibold mt-10 w-full text-center text-gray-600">
          No Blogs found
        </p>
      )}

      {/* <HoverImageCard items={blogs} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:  2xl:grid-cols-4 gap-5 md:w-[80vw] shrink-0  mx-auto">
        {blogs.map((e, i) => (
          <BlogCard key={i} blog={e} />
        ))}
      </div>
    </div>
  );
}
