type Props = {
  children: React.ReactElement;
};

export const MenuBar:React.FC<Props> = ({ children }) => (
  <div className="bg-base-200 drawer h-52 rounded-lg shadow">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      <label htmlFor="my-drawer" className="btn btn-primary drawer-button">open menu</label>
    {children}
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay" />
      <ul className="menu bg-base-100 text-base-content w-80 overflow-y-auto p-4">
        <li>
          <span>Menu Item</span>
        </li>
        <li>
          <span>Menu Item</span>
        </li>
      </ul>
    </div>
  </div>
);
