type TabProps = {
  isFocused: boolean;
  title: string;
  content: string;
};

const Tab = ({ title, content, isFocused }: TabProps) => (
  <>
    <div className="tab-header">
      {title}
    </div>  
    {isFocused && (
    <div className="tab-content">
      {content}
    </div>
    )}
  </>
);
export default Tab;
