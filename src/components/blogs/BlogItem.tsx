import {List} from "@/types/blogs/blogs";

const BlogItem = ({data}:{data:List})=>{

    return(
        <div>
            <img src={data.thumb} alt={data.title}/>
        </div>
    )
}

export default BlogItem;