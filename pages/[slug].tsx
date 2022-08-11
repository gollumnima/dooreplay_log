import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParamType, PostType } from '~/types';
import getPost from '~/utils/getPost';
import getPosts from '~/utils/getPosts';

const Post:React.FC<PostType> = ({
  title, date, content,
}) => (
  <div>
    <h1 className="font-bold text-7xl mt-24 mb-12">{title ?? ''}</h1>
    <time className="text-gray-500 italic">{date ?? ''}</time>
    <p className="prose mt-12">
      <MDXRemote {...content} />
    </p>
  </div>
);

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: ParamType) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
