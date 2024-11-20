import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi2';
import clsx from 'clsx';

export type Organization = {
  id: string;
  name: string;
  user_id: string;
};

interface OrganizationSwitcherProps {
  organizations: Organization[];
  activeOrganization?: Organization | null;
  onOrganizationSelect: (organization: Organization) => void;
  isLoading?: boolean;
}

export function OrganizationSwitcher({
  organizations,
  activeOrganization,
  onOrganizationSelect,
  isLoading = false
}: OrganizationSwitcherProps) {
  if (isLoading) {
    return (
      <div className="h-10 w-48 animate-pulse rounded bg-gray-100" />
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {activeOrganization?.name || 'Select Organization'}
        <HiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {organizations.map((org) => (
              <Menu.Item key={org.id}>
                {({ active }) => (
                  <button
                    onClick={() => onOrganizationSelect(org)}
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm',
                      activeOrganization?.id === org.id && 'bg-gray-50'
                    )}
                  >
                    {org.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 