import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type DataType = {
  title: string;
  date: string;
};

export type ParamType = {
  params: {
    slug: string;
  }
};

export type PostType = {
  data: DataType;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export type PostContentType = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type PostsType = {
  posts: PostContentType[]
};
