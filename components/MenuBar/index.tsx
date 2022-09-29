import Link from 'next/link';
import { useState } from 'react';
import styles from './menubar.module.css';

const {
  menubarContainer, menubarBox, menubarLeft, menubarRight, svgIcon,
} = styles;

export const MenuBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav className={menubarContainer}>
      <div className={menubarBox}>
        <ul className={`${menubarLeft} mt-6`}>
          <li className="mb-2">
            <button
              type="button"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <svg
                className={svgIcon}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 298.757 298.757"
                xmlSpace="preserve"
                fill="white"
              >
                <path d="M291.701,119.091h-39.95v-29.61c0-3.893-3.156-7.05-7.05-7.05h-95.549l-16.896-35.955    c-1.162-2.472-3.648-4.051-6.381-4.051H7.05c-3.893,0-7.05,3.157-7.05,7.05v199.806c0,3.846,3.135,7.051,7.054,7.051    c0.004,0,0.008-0.001,0.012-0.001h237.635c2.923,0,5.543-1.805,6.587-4.536l47-123.14    C300.048,124.044,296.635,119.091,291.701,119.091z M14.1,56.526h107.299l16.896,35.955c1.162,2.472,3.648,4.051,6.381,4.051    h92.975v22.56H54.05c-2.923,0-5.544,1.805-6.587,4.536L14.1,211.04V56.526z M239.846,242.231H17.287l41.618-109.04    c10.158,0,212.404,0,222.559,0L239.846,242.231z" />
              </svg>
            </button>
          </li>
          <li className="mb-2">
            <button
              type="button"
            >
              <svg
                className={svgIcon}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 487.95 487.95"
                xmlSpace="preserve"
                fill="white"
              >
                <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z" />
              </svg>
            </button>
          </li>
          <li className="mb-2">
            <a href="https://github.com/gollumnima" target="_blank" rel="noreferrer">
              <button type="button">
                <svg
                  className={svgIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  version="1.1"
                  fill="white"
                >
                  <path d="M21.6225861,11.1091377 L12.8904814,2.37725069 C12.3876981,1.87424977 11.5721445,1.87424977 11.0689259,2.37725069 L9.255859,4.19075292 L11.5558204,6.49093194 C12.0903813,6.31027822 12.703298,6.4315121 13.1294667,6.85746312 C13.5578119,7.28624365 13.6779575,7.90438412 13.492733,8.44090392 L15.7097678,10.657721 C16.2462876,10.4727142 16.8648634,10.5922069 17.2932086,11.0214227 C17.8917601,11.6197566 17.8917601,12.5898453 17.2932086,13.1886145 C16.6942218,13.7876013 15.7243507,13.7876013 15.1251462,13.1886145 C14.6750355,12.7380684 14.5635961,12.0763969 14.7919163,11.5218118 L12.7241929,9.45430603 L12.7241929,14.8950304 C12.8700218,14.9672919 13.0077975,15.0634954 13.1294667,15.1847293 C13.7280182,15.7832808 13.7280182,16.7531519 13.1294667,17.352574 C12.5309152,17.9509079 11.5603911,17.9509079 10.9620573,17.352574 C10.3635058,16.7531519 10.3635058,15.7832808 10.9620573,15.1847293 C11.1100627,15.0369415 11.2813573,14.9250668 11.4641876,14.8501934 L11.4641876,9.35919076 C11.2813573,9.28453506 11.110498,9.17353096 10.9620573,9.02487254 C10.5086817,8.57171463 10.3996365,7.90612536 10.6323098,7.34936363 L8.36477905,5.08161522 L2.37708745,11.0686539 C1.87430418,11.5720901 1.87430418,12.3876437 2.37708745,12.8906446 L11.1096274,21.6225317 C11.6124107,22.1253149 12.4277467,22.1253149 12.9311829,21.6225317 L21.6225861,12.9311285 C22.1258046,12.4281276 22.1258046,11.6121386 21.6225861,11.1091377" id="Shape" />
                </svg>
              </button>
            </a>
          </li>
          <li className="mb-2">
            <Link href="/">
              <button type="button">
                <svg
                  className={svgIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 58.365 58.365"
                  xmlSpace="preserve"
                  fill="white"
                >
                  <path d="M57.863,26.632L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414c0.374,0.404,1.009,0.427,1.413,0.052  l4.319-4.011v3.278v31h16v-18c0-3.866,3.134-7,7-7s7,3.134,7,7v18h16v-31v-3.278l4.319,4.011c0.192,0.179,0.437,0.267,0.681,0.267  c0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z" />
                </svg>
              </button>
            </Link>
          </li>
        </ul>
        {isOpenMenu
          && (
          <ul className={menubarRight}>
            <li>
              여기다
            </li>
            <li>
              폴더구조
            </li>
            <li>
              만들거야
            </li>
            <li>
              레쥬메 넣을거다
            </li>
          </ul>
          )}
      </div>
    </nav>
  );
};
