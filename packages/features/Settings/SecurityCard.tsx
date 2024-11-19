import { SettingsHeader } from "ui";

export const SecurityCard = () => {
  return (
   <>
      <SettingsHeader 
        title="Security Settings"
        description="Manage security settings for your account"
      />
      <hr className="mt-1 mb-8" />
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium">Your account is managed by Google</h3>
          <p className="text-sm mb-4">
            To change your password, enable two-factor authentication and more, please visit your Google account settings.
          </p>
          <a 
            target="_blank"
            href="https://myaccount.google.com/" 
            className="btn"
          >
            Manage account
          </a>
        </div>
      </div>
   </>
  );
};
