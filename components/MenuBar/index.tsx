export const MenuBar = () => {
  const divStyle = {
    'min-height': '120px',
  };

  return (
    <>
      <p className="mb-4">
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Toggle width collapse
        </button>
      </p>
      <div style={divStyle}>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm" style="width: 300px;">
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </div>
        </div>
      </div>
    </>
  );
};
