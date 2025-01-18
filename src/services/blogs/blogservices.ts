import axios from "axios";

export const getBlogPosts = async () => {
  try {
    const response = await axios.get(
      "https://api9.parentune.com/blogs/blogs?page=2&interest="
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
