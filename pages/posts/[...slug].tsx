/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
// import dynamic from 'next/dynamic';
import {
  ParamType, PostType,
} from '~/types';
import { getPosts, getPost } from '~/utils/getPosts';

// import ImageWrapper from '~/components/ImageWrapper';

const Post:React.FC<PostType> = ({
  content, frontmatter,
}) => {
  // const MDXContent = dynamic(() => import(`../../../${filename}`));
  console.log({ content });
  return (
    <div>
      <h1 className="font-bold text-7xl mt-24 mb-12">{frontmatter.title ?? ''}</h1>
      <time className="text-gray-500 italic">{frontmatter.date ?? ''}</time>
      <Image width={800} src={frontmatter.thumbnail} alt="thumbnail" />
      <MDXRemote {...content} />
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  try {
    const posts = await getPosts();
    const paths = await posts.map((post) => (
      {
        params: {
          slug: post.slug,
        },
      }
    ));
    console.log(JSON.stringify(paths, null, 2));
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const getStaticProps = async ({ params }: ParamType) => {
  console.log(params.slug, 'slug!! ----- 51');
  try {
    const { content, frontmatter } = await getPost(params.slug);
    console.log(content, 'content');
    const mdxSource = await serialize(content);

    return {
      props: {
        content: mdxSource,
        frontmatter,
      },
    };
  } catch (err) {
    console.error(err);
    throw new Error((err as Error).message);
  }
};
