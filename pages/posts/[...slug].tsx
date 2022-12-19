/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getPosts, getPost } from '~/utils/getPosts';
import { SerializedPost } from '~/types';

const ViewPost = ({ post }: { post: SerializedPost }) => (
  <div className="px-12">
    <h1 className="font-bold text-4xl mt-24 mb-2">{post.meta.title ?? ''}</h1>
    <time className="text-gray-500 italic">{post.meta.date ?? ''}</time>
    { post.meta.thumbnail
    && <Image width={800} height={600} src={post.meta.thumbnail} alt="thumbnail" />}
    <div className="lg mt-6">
      <MDXRemote {...post.content} />
    </div>
  </div>
);

export default ViewPost;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
{ post: SerializedPost },
{ slug: string[] }
> = async ({ params }) => {
  const post = await getPost(params?.slug ?? []);

  const serializedPostContent = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: serializedPostContent,
      },
    },
  };
};
