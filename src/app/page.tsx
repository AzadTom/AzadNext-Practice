import {getBlogPosts} from "@/services/blogs/blogservices";
import Blogs from "@/components/blogs/Blogs";
import {BlogResponse} from "@/types/blogs/blogs";


const page  = async()=>{

    const data= await getBlogPosts();
    const allposts =  data as BlogResponse;

    return(
        <main className="max-w-[1000px] mx-auto">
        {allposts && <Blogs posts={allposts}/>}
        </main>
    )
}

export default page;



