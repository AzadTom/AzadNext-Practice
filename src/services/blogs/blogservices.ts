
export const getBlogPosts = async() => {

    try{

        const response = await fetch('http://localhost:3001/api/blogs');
        return response.json();
    }
    catch (e) {
        console.error(e);
    }

}