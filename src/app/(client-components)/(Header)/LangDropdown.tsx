import { Popover, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FC, Fragment } from "react";

export const headerLanguage = [
  {
    id: "English",
    name: "English",
    description: "United States",
    href: "##",
    active: true,
  },
  {
    id: "Vietnamese",
    name: "Vietnamese",
    description: "Vietnam",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgium",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "##",
  },
];

interface LangDropdownProps {
  panelClassName?: string;
  className?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "top-full right-0 max-w-sm w-96",
  className = "hidden md:flex",
}) => {
  const renderLang = (close: () => void) => {
    return (
      <div className="grid gap-8 lg:grid-cols-2">
        {headerLanguage.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => close()}
            className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
              item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
            }`}
          >
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <Popover className={`LangDropdown relative ${className}`}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`
              ${open ? "" : "text-opacity-80"}
              group self-center h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none
            `}
          >
            <GlobeAltIcon className="w-6 h-6 opacity-80" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className={`absolute z-20 ${panelClassName}`}>
              <div className="p-3 sm:p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
                {renderLang(close)}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default LangDropdown;
