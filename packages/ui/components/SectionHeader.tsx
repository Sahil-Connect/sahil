import { ReactNode } from "react";
import { Card } from "ui";
import Link from 'next/link';

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

export const SectionHeader = ({ title, actions, children }: SectionHeaderProps) => {
  return (
    <section className="space-y-4">
      <Card>
        <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center">
          <div>
            <h1 className="text-xl">
              {title}
            </h1>
          </div>
          <div className="flex gap-2">
            {actions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`btn btn-sm ${action.primary ? 'btn-primary' : ''} normal-case`}
              >
                {action.icon}
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </Card>
      {children}
    </section>
  );
};
