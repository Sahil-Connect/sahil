import { SettingsHeader } from "ui";

export const NotificationsCard = () => {
  return (
   <>
      <SettingsHeader 
        title="Notifications Settings"
        description="Choose when and how you want to be notified"
      />
      <hr className="mt-1 mb-8" />
      <form action="">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <span className="label p-0 font-medium">
                  Push Notifications
                </span>
                <p className="text-xs text-gray-500 md:text-sm">
                  Alerts sent to the user&#39;s mobile device or desktop
                </p>
              </div>
              <div className="min-w-fit">
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  // className="toggle border-blue-500 bg-blue-500 [--tglbg:gray] hover:bg-blue-700" 
                  defaultChecked
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <span className="label p-0 font-medium">
                  Email Notifications
                </span>
                <p className="text-xs text-gray-500 md:text-sm">
                  Receive messages sent to the your email address
                </p>
              </div>
              <div className="min-w-fit">
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  // className="toggle border-blue-500 bg-blue-500 [--tglbg:gray] hover:bg-blue-700" 
                  defaultChecked
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <span className="label p-0 font-medium">
                  In-App Notifications
                </span>
                <p className="text-xs text-gray-500 md:text-sm">
                  Alerts that appear within the application interface
                </p>
              </div>
              <div className="min-w-fit">
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  // className="toggle border-blue-500 bg-blue-500 [--tglbg:gray] hover:bg-blue-700" 
                  defaultChecked
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <span className="label p-0 font-medium">
                  SMS Notifications
                </span>
                <p className="text-xs text-gray-500 md:text-sm">
                  Receive Text messages sent to the your phone number
                </p>
              </div>
              <div className="min-w-fit">
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  // className="toggle border-blue-500 bg-blue-500 [--tglbg:gray] hover:bg-blue-700" 
                  defaultChecked
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <span className="label p-0 font-medium">
                  Updates & Features
                </span>
                <p className="text-xs text-gray-500 md:text-sm">
                  Notifications about new updates and their features
                </p>
              </div>
              <div className="min-w-fit">
                <input 
                  type="checkbox" 
                  className="toggle toggle-primary" 
                  // className="toggle border-blue-500 bg-blue-500 [--tglbg:gray] hover:bg-blue-700" 
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </form>
   </>
  );
};
