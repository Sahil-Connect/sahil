import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { settingslinks } from "./Settings";
import { Icon } from "./Icon";

type SidebarLink = {
  name: string;
  href: string;
};

export type SidebarProps = {
  links: SidebarLink[];
};

export const Sidebar: FC<SidebarProps> = ({
  links,
}) => {
  const router = useRouter();
  return (
    <div>
      <div className="lg:hidden">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Settings</h1>
        </div>
        <div className="mb-7">
          <div className="w-full overflow-x-auto">
            <div className="border-b">
              <nav className="flex">
                {settingslinks.map(({ name, href, icon }) => {
                  const isMatch = router.pathname.split('/')[2] === href.split('/')[2];
                  return (
                    <>
                      <Link
                        href={href}
                        className={`mb-1 py-1 whitespace-nowrap text-sm me-5 leading-6 ${isMatch ? "font-semibold text-zinc-950" : "text-zinc-950"
                          }`}
                      >

                        {name}
                      </Link>
                    </>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <aside className="hidden lg:block lg:w-[220px]">
        <ul className="px-2 mt-3">
          {links.map(({ name, href, icon }) => {
            const isMatch = router.pathname.split('/')[2] === href.split('/')[2];
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={`group font-semibold flex items-center gap-x-3 rounded-md mb-4 p-2 text-sm leading-6 transition duration-300 hover:bg-primary/20 ${isMatch ? "bg-secondary hover:bg-primary/10 font-semibold rounded-md text-zinc-50" : "text-zinc-950"
                    }`}
                >
                  <Icon icon={icon} />
                  <span className="hidden lg:block">

                    {name}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>

  );
};

export default Sidebar;
