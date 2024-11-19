import { useSession } from "next-auth/react";
import { Avatar, SettingsHeader } from "ui";

export const ProfileCard = () => {
  const { data: session } = useSession();
  return (
   <>
      <SettingsHeader 
        title="Profile Settings"
        description="Manage settings for your Sahil profile"
      />
      <hr className="mt-1 mb-8" />
      <form action="">
        <div className="space-y-8">
          <div>
            <label htmlFor="profile-picture" className="label label-text p-0 font-medium">Profile Picture</label>
            <p className="text-xs text-gray-500 mb-2">
              PNG, JPG, or SVG under 5MB
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <Avatar alt="Hello" src={session?.user?.image} />
              <input 
                type="file" 
                className="block text-sm 
                file:me-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:text-white file:cursor-pointer cursor-pointer
                file:disabled:opacity-50 file:disabled:pointer-events-none
                text-neutral-500
                file:bg-zinc-400
                " 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="full-name" className="label label-text p-0 mb-2 font-medium">Full name</label>
              <input 
                type="text" 
                // readOnly
                defaultValue={session?.user?.name || ''}
                className="input input-md input-bordered w-full outline-none focus:outline-none" 
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="label label-text p-0 mb-2 font-medium">Email</label>
              <div className="input input-md input-bordered flex items-center gap-2 w-full">
                <input 
                  type="text" 
                  readOnly
                  disabled
                  defaultValue={session?.user?.email || ''}
                  className="grow" 
                  placeholder="Search"
                />
                <span className="badge badge-info text-xs">Primary</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="Gender" className="label label-text p-0 mb-2 font-medium">Gender</label>
              <select className="select select-bordered w-full outline-none focus:outline-none">
                <option selected disabled>Select your gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone-number" className="label label-text p-0 mb-2 font-medium">Phone number</label>
              <input 
                type="number" 
                placeholder="Phone number"
                className="input input-md input-bordered w-full outline-none focus:outline-none" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="city" className="label label-text p-0 mb-2 font-medium">City</label>
              <select className="select select-bordered w-full outline-none focus:outline-none">
                <option selected>Kigali</option>
                <option>Kicukiro</option>
                <option>Rutongo</option>
                <option>Kacyiru</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="label label-text p-0 mb-2 font-medium">Country</label>
              <select className="select select-bordered w-full outline-none focus:outline-none">
                <option selected disabled>Rwanda</option>
                <option disabled>Other countries coming soon</option>
              </select>
            </div>
          </div>

          <div>
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
