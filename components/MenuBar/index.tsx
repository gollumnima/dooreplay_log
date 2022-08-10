export const MenuBar = () =>
// TODO: need to search tailwind css inline style
// const divStyle = {
//   'min-height': '120px',
// };
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <>
      <p className="mb-4">
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Toggle width collapse
        </button>
      </p>
      <div>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            This is some placeholder content for a horizontal collapse.
          </div>
        </div>
      </div>
    </>
  );
