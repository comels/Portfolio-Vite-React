import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const baseLinkClass =
    "tracking-wider block px-3 py-2 text-normal text-gray-800 hover:font-medium";
  const activeLinkClass = "font-medium";
  const inactiveLinkClass = "font-light";

  return (
    <Disclosure as="nav" className="bg-white py-1">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="font-extrabold text-4xl mr-5 text-orange-600">{"< C />"}</h1>
                  {/* <img className="h-8 w-auto" src="/icon.png" alt="Logo" /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `${baseLinkClass} ${
                          isActive ? activeLinkClass : inactiveLinkClass
                        }`
                      }
                    >
                      accueil
                    </NavLink>
                    <NavLink
                      to="/projets"
                      className={({ isActive }) =>
                        `${baseLinkClass} ${
                          isActive ? activeLinkClass : inactiveLinkClass
                        }`
                      }
                    >
                      projets
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `${baseLinkClass} ${
                          isActive ? activeLinkClass : inactiveLinkClass
                        }`
                      }
                    >
                      contact
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-12">
                <a
                  href="https://www.linkedin.com/in/comels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-stone-500 text-2xl"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.github.com/comels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-stone-500 text-2xl"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Ouvrir le menu principal</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseLinkClass} ${
                    isActive ? activeLinkClass : inactiveLinkClass
                  }`
                }
              >
                accueil
              </NavLink>
              <NavLink
                to="/projets"
                className={({ isActive }) =>
                  `${baseLinkClass} ${
                    isActive ? activeLinkClass : inactiveLinkClass
                  }`
                }
              >
                projets
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${baseLinkClass} ${
                    isActive ? activeLinkClass : inactiveLinkClass
                  }`
                }
              >
                contact
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
