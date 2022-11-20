import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostMeta = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags?: string[]
};

export interface PostListItem {
  slug: string[];
  meta: PostMeta;
}

export interface Post extends PostListItem {
  content: string;
}

export interface SerializedPost extends PostListItem {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}
