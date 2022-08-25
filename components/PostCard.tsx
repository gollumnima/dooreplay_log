import Link from 'next/link';
import { PostContentType } from '~/types';

export const PostCard: React.FC<PostContentType> = ({
  data, slug,
}) => {
  const { title, date, description } = data;
  return(
  <div className="card w-72 card-bordered card-compact lg:card-normal">
  <figure>
    {/* TODO: dynamic하게 이미지도 data에서 불러오자 */}
    <img src="/thumbnails/work_together_thumbnail.png" className='object-cover h-48 w-full'/>
  </figure> 
  <div className="card-body">
    <h2 className="card-title text-cyan-50">{title}</h2> 
    <p>{description}</p>
    <div className="card-actions">
    <Link href={`/${slug}`} as={`/${slug}`}>
      <button className="btn btn-primary">More info</button>
    </Link>
    </div>
  </div>
</div>
)};
