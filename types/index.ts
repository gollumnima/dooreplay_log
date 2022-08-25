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
  title: string;
  date: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  description: string;
};

export type PostContentType = {
  slug: string;
  data: PostType;
};

export type PostsType = {
  posts: PostContentType[]
};
