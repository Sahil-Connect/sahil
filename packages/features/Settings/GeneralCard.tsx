import { SettingsHeader } from "ui";

export const GeneralCard = () => {
  return (
   <>
      <SettingsHeader 
        title="General Settings"
        description="Manage your preferences"
      />
      <hr className="mt-1 mb-8" />
      <form action="">
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <span className="label p-0 font-medium">Language</span>
              <p className="mb-3 text-sm text-gray-500">
                Default language for Sahil
              </p>
              <select className="select select-bordered w-full outline-none focus:outline-none">
                <option selected>English</option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <span className="label p-0 font-medium">Timezone</span>
              <p className="mb-3 text-sm text-gray-500">
                Select preferred timezone
              </p>
              <select className="select select-bordered w-full outline-none focus:outline-none">
                <option selected>Africa/Kigali</option>
              </select>
            </div>
          </div>
          
          <div className="">
            <SettingsHeader 
              title="Appearance"
            />
            <hr className="mb-3" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col w-full">
                  <label htmlFor="appearance" className="label p-0 font-medium">Theme</label>
                  <p className="text-sm text-gray-500">
                    Select preferred theme color
                  </p>
                </div>
                <div className="min-w-fit">
                  <select className="select select-sm select-bordered w-full outline-none focus:outline-none">
                    <option selected>Light mode</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button 
              type="submit" 
              className="px-3 rounded-lg py-2 bg-primary text-zinc-50 text-sm"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
   </>
  );
};
