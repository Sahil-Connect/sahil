
export const DeleteAccountCard = () => {
  return (
    <>
      <h3 className="text-lg mb-3">Delete Account</h3>
      <div className="text-sm text-neutral-400" role="alert">
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <div className="shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"/>
              </svg>
            </div>
            <div className="flex-1 md:flex md:justify-between ms-2">
              <p className="text-sm">
                Be Careful! Account deletion cannot be undone. All your account history will be deleted without the possibility to restore
              </p>
            </div>
          </div>
          <div className="mt-4 w-full md:flex md:justify-end md:items-end md:mx-auto">
            <button 
              type="button" 
              // className="rounded-md text-zinc-50 bg-error px-2.5 py-1.5 text-sm font-semibold shadow-sm border-none"
              // className="rounded-md text-gray-50 bg-error px-2.5 py-2.5 text-sm font-semibold shadow-sm border-none"
              // className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-red-700 text-white"
              // className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-all duration-300"
              >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
