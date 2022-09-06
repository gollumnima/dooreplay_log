import Head from 'next/head';
import { useRouter } from 'next/router';
import { BLOG_URL, TWITTER_USERNAME, SITE_NAME } from '~/constants/name';
import Favicon from './Favicon';

type Props = {
  pageTitle?: string;
};

const meta = {
  description: '토공의 블로그입니다. 개발계의 토끼공주가 되는게 목표입니다',
  // ogImagePath: '/assets/card-image.webp',
};

const Meta: React.FC<Props> = ({ pageTitle }) => {
  const router = useRouter();
  const ogUrl = router ? BLOG_URL + router.asPath : BLOG_URL;
  const ogType = router?.pathname === '/' ? 'website' : 'article';
  const ogTitle = pageTitle || '토목공사';
  const ogImage = BLOG_URL + meta;

  return (
    <Head>
      <title>{ogTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.description} key="description" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:description"
        content={meta.description}
        key="ogDescription"
      />
      <meta property="og:image" content={ogImage} key="ogImage" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_USERNAME} />
      <Favicon />
    </Head>
  );
};

export default Meta;
