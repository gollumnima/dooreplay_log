import Error from 'next/error';
import { PostCard } from '~/components/PostCard';
import { PostContentType, PostsType } from '~/types';
import getPosts from '~/utils/getPosts';

const Main: React.FC<PostsType> = ({ posts }) => (
  <div>
    <h1>최근 포스트</h1>
    {posts.map((post: PostContentType) => {
      const {
        slug, title, date, description,
      } = post;

      return (
        <PostCard
          key={slug}
          title={title}
          date={date}
          description={description}
          slug={slug}
        />
      );
    })}
  </div>
);

export default Main;

export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
