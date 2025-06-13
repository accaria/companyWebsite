import axios from "axios";
import { IBlog } from "@/interface/blog.interface";

export async function fetchBlogService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}`
    );
    console.log (data?.items[0].fields?.articleThumbnail); 
    return data?.items;
  } catch (err) {
    console.log(err);
  }
}