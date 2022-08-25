
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BLOG_URL, TWITTER_USERNAME, SITE_NAME } from '~/constants/name';

type Props = {
  pageTitle?: string;
};

const meta = {
  description: '토공의 블로그입니다. 개발계의 토끼공주가 되는게 목표입니다',
  // ogImagePath: '/assets/card-image.webp',
};

const Meta: React.FC<Props> = ({ pageTitle }) => {
  const router = useRouter();
  const ogUrl = BLOG_URL + router.asPath;
  const ogType = router.pathname === '/' ? 'website' : 'article';
  const ogTitle = pageTitle ? pageTitle : '토공의 개발 블로그';
  const ogImage = BLOG_URL + meta
  
  return (
    // TODO: favicon... etc
    <Head>
      <title>{ogTitle}</title>
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
    </Head>
  )
}

export default Meta;