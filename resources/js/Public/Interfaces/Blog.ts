import Tag from "./Tag";

interface Blog {
  id: number;
  seo: string;
  tags: Array<Tag>;
  thumbnail: string;
  content: string;
  title: string;
  published_at: any;
}

export default Blog
