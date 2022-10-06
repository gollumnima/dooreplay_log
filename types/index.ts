import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type DataType = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags?: string[]
};

export type ParamType = {
  params: {
    slug: string;
  }
};

export type PostType = {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontmatter: DataType;
};

export type PostContentType = {
  slug: string;
  data: DataType;
};

export type PostsType = {
  posts: PostContentType[]
};
