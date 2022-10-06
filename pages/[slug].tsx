/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { ParamType, PostType } from '~/types';
import { getPosts, getPost } from '~/utils/getPosts';

// import ImageWrapper from '~/components/ImageWrapper';

const Post:React.FC<PostType> = ({
  content, frontmatter,
}) => (
  <div>
    <h1 className="font-bold text-7xl mt-24 mb-12">{frontmatter.title ?? ''}</h1>
    <time className="text-gray-500 italic">{frontmatter.date ?? ''}</time>
    <Image width={800} src={frontmatter.thumbnail} alt="thumbnail" />
    <MDXRemote {...content} />
  </div>
);

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => (
    {
      params: {
        slug: post.slug.split('pages/').slice(1)[0],
      },
    }
  ));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: ParamType) => {
  const { content, frontmatter } = await getPost(params.slug);

  const mdxSource = await serialize(content);

  return {
    props: {
      content: mdxSource,
      frontmatter,
    },
  };
};
