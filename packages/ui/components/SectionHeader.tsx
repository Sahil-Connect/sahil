import { ReactNode } from "react";
import { Card } from "ui";
import Link from "next/link";

interface Action {
  label: string;
  icon: ReactNode;
  href: string;
  primary?: boolean;
}

interface SectionHeaderProps {
  title: string;
  actions: Action[];
  children: ReactNode;
}

export const SectionHeader = ({
  title,
  actions,
  children,
}: SectionHeaderProps) => {
  return (
    <section className="space-y-4 py-2">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:w-auto">
            <h1 className="text-xl">{title}</h1>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-start sm:justify-end">
            {actions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`btn btn-sm flex-1 sm:flex-none ${
                  action.primary ? "btn-primary" : ""
                } normal-case`}
              >
                {action.icon}
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      {children}
    </section>
  );
};
