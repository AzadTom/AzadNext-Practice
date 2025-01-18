"use client";
import FlatList from "@/Hoc/FlatList";
import BlogItem from "@/components/blogs/BlogItem";
import { getBlogPosts } from "@/services/blogs/blogservices";
import { List } from "@/types/blogs/blogs";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState<List[]>([]);

  useEffect(() => {
    getBlogPosts()
      .then((res) => setBlogs(res.list))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="mx-4 my-4 grid sm:grid-cols-2 gap-4">
      <FlatList
        data={blogs}
        key="bloglisting"
        renderItem={(item) => <BlogItem key={item.bloggerName} data={item} />}
      />
    </section>
  );
};

export default Blogs;
