import { BlogResponse, List } from "@/types/blogs/blogs";
import BlogItem from "@/components/blogs/BlogItem";

const Blogs = (props: { posts: BlogResponse }) => {
  return (
    <section className="mx-4 my-4 grid sm:grid-cols-2 gap-4">
      {props.posts.list.map((post: List) => (
        <BlogItem key={post.title} data={post} />
      ))}
    </section>
  );
};

export default Blogs;
