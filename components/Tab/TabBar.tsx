import { PropsWithChildren } from 'react';
import Tab from './index';

type TabBarProps = {
  isFocused: boolean;
  title: string;
};

const TabBar = ({ children, isFocused, title }:PropsWithChildren<TabBarProps>) => {
  const tabs = [{ title: '제목1', content: 'MDX다' }];
  return (
  // tabs를 어떻게 가져와야 할까 고민해보자.
    <div className="tab-container">
      {tabs.map((tab) => (
        <Tab
          key={tab.title}
          title={title}
          content={tab.title === title ? tab.content : ''}
          isFocused={isFocused}
        />
      ))}
    </div>
  );
};

export default TabBar;
