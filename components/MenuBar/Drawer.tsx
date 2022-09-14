export const Drawer = () => {
  return (
    <div className="bg-base-200 drawer h-screen rounded-lg shadow">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">open menu</label> */}
      {/* {children} */}
    </div>
    <div className="drawer-side">
      {/* <label htmlFor="my-drawer" className="drawer-overlay" /> */}
      <ul className="menu bg-base-100 text-base-content w-80 overflow-y-auto p-4">
        <li>
          <a href="/posts">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Posts  
          </a>
        </li>
        <ul className="menu bg-base-100 text-base-content w-80 overflow-y-auto p-4">
          <li>
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" clipRule="evenodd" className="inline-block w-4 h-4 mr-2 stroke-current">
                <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
              </svg>
              Level 2
            </a>
          </li>
        </ul>
        <li>
          <span>README.md</span>
        </li>
      </ul>
    </div>
  </div>
  )
}