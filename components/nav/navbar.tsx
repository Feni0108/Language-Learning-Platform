import React, {Fragment, useEffect, useState} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {SiDuolingo} from "react-icons/si";
import {FaUserCircle} from "react-icons/fa";
import SignOutButton from "../ChildComponent/SignOutButton";
import {useSession} from "next-auth/react";
import i18n from '@/i18n/i18n';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function DynamicNavbar() {
  return <div>Loading...</div>; // Placeholder component
}

export default function NavBar() {
  const {data: session, status} = useSession();
  const t = (key: string) => i18n.t(key);
  const navigation = [
    {name: t("Home"), href: "/", current: true},
    {name: t("Leaderboard"), href: "/leaderboard", current: false},
    {name: t("Friends"), href: "#", current: false},
  ];
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false); // Set loading to false when component is mounted
  }, []);
  return (
      <>
        {!isLoading && (
            <Disclosure as="nav" className="bg-teal-200">
              {({open}) => (
                  <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                          {/* Mobile menu button*/}
                          <Disclosure.Button
                              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-12 w-12" aria-hidden="true"/>
                            ) : (
                                <Bars3Icon className="block h-12 w-12" aria-hidden="true"/>
                            )}
                          </Disclosure.Button>
                        </div>
                        <div
                            className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                          <div className="flex flex-shrink-0 align-middle">
                            <SiDuolingo className="block h-12 w-auto lg:hidden"/>
                            <SiDuolingo className="hidden h-12 w-auto lg:block"/>
                          </div>
                          <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 pt-1">
                              {navigation.map((item) => (
                                  <a
                                      key={item.name}
                                      href={item.href}
                                      className={classNames(
                                          item.current
                                              ? "bg-teal-800 text-white"
                                              : "text-gray-800 hover:bg-teal-500 hover:text-white",
                                          "rounded-md px-3 py-2 text-sm font-medium "
                                      )}
                                      aria-current={item.current ? "page" : undefined}
                                  >
                                    {item.name}
                                  </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button
                                  className="flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <div>
                                  {session && (
                                      <img
                                          className="h-12 w-12 rounded-full"
                                          src={
                                            session.user?.image
                                                ? session.user?.image
                                                : "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
                                          }
                                          alt=""
                                      />
                                  )}
                                  {!session && (
                                      <FaUserCircle className="h-12 w-12 rounded-full"/>
                                  )}
                                </div>
                              </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({active}) => (
                                      <div>
                                        {session && (
                                            <div
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                )}
                                            >
                                              {t('Signed_in_as')}{" "}
                                              {session.user?.email
                                                  ? session.user?.email
                                                  : session.user?.username}{" "}
                                            </div>
                                        )}
                                        {!session && (
                                            <a
                                                href="/auth/signin"
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-gray-700"
                                                )}
                                            >
                                              {t('Sign_in')}
                                            </a>
                                        )}
                                      </div>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({active}) => (
                                      <a
                                          href="/settings"
                                          className={classNames(
                                              active ? "bg-gray-100" : "",
                                              "block px-4 py-2 text-sm text-gray-700"
                                          )}
                                      >
                                        {t('Settings')}
                                      </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({active}) => (
                                      <div>{session && <SignOutButton/>}</div>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                      <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
              )}
            </Disclosure>
        )}
        {isLoading && <DynamicNavbar/>}
      </>
  );
}
