
interface SettingsHeaderProps {
  title: string;
  description?: string;
}

export const SettingsHeader = ({ title, description }: SettingsHeaderProps) => {
  return (
    <div className="mb-3">
      <h1 className="text-xl font-semibold font-inter">
        {title}
      </h1>
      <p className="text-sm">
        {description}
      </p>
    </div>
  )
};
