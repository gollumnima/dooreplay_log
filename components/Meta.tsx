import React from 'react';
import { useRouter } from 'next/router';
import { BLOG_URL, TWITTER_USERNAME, SITE_NAME } from '~/constants/name';
import Favicon from './Favicon';

type Props = {
  pageTitle: string;
};

const meta = {
  description: 'dooreplay의 블로그입니다. 저만의 속도로 찬찬히 재밌게 개발해나가고 있습니다.',
  // ogImagePath: '/assets/card-image.webp',
};

const Meta: React.FC<Props> = ({ pageTitle }) => {
  const router = useRouter();
  const ogUrl = router ? BLOG_URL + router.asPath : BLOG_URL;
  const ogType = router?.pathname === '/' ? 'website' : 'article';
  const ogTitle = pageTitle || 'dooreplay log';
  const ogImage = BLOG_URL + meta;

  return (
    <>
      <title>{ogTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.description} key="description" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content="https://raw.githubusercontent.com/gollumnima/dooreplay_log/main/public/images/og_image.png" key="ogImage" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:description"
        content={meta.description}
        key="ogDescription"
      />
      <meta name="twitter:creator" content="@dooreplay" />
      <meta name="twitter:site" content="@dooreplay" />
      <meta name="twitter:url" content="https://blog.dooreplay.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="dooreplay log입니다. 아직 공사중입니다~" />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/gollumnima/dooreplay_log/main/public/images/og_image.png" />
      <Favicon />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Gothic+Coding&family=Nanum+Myeongjo&display=swap" rel="stylesheet" />
    </>
  );
};

export default Meta;
