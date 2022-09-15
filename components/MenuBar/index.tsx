import { useState } from 'react';
import styles from './menubar.module.css';

const {
  menubarContainer, menubarBox, menubarLeft, menubarRight, clickable,
} = styles;

export const MenuBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav className={menubarContainer}>
      <div className={menubarBox}>
        <ul className={menubarLeft}>
          <li className={clickable}>
            <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
              폴더 아이콘
            </button>
          </li>
          <li>
            돋보기
          </li>
          <li>
            깃헙
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
