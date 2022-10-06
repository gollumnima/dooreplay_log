import styles from './imageWrapper.module.css';

type ImageProps = {
  src: string;
  alt: string;
};

const { imageWrapper } = styles;

const ImageWrapper = ({ src, alt }: ImageProps) => (
  <img className={imageWrapper} src={src} alt={alt} />
);

export default ImageWrapper;
