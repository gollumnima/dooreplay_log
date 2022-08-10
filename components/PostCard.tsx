import Link from 'next/link';
import { PostContentType } from '~/types';

export const PostCard: React.FC<PostContentType> = ({
  title, date, description, slug,
}) => (
  <div>
    <h2>{title}</h2>
    <time>{date}</time>
    <p>{description}</p>
    <Link href={`/${slug}`} as={`/${slug}`}>
      <a href={`/${slug}`}>더 보기</a>
    </Link>
  </div>
);
