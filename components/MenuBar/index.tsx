import { useState } from 'react';
import styles from './menubar.module.css';

type Props = {
  // isOpen: boolean;
}

const {menubar_container, menubar_box, menubar_left, menubar_right, clickable } = styles;

export const MenuBar = ({  }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return(
    <nav className={menubar_container}>
      <div className={menubar_box}>
          <ul className={menubar_left}>
            <li className={clickable} onClick={() => setIsOpenMenu(!isOpenMenu)}>
              폴더 아이콘
            </li>
            <li>
              돋보기
            </li>
            <li>
              깃헙
            </li>
          </ul>
          {isOpenMenu &&
          <ul className={menubar_right}>
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
      }
      </div>
    </nav>
)
};
